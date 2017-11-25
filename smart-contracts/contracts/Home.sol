pragma solidity 0.4.18;

import "./EventContract.sol";

contract Home {
  address constant EVENT_ADDRESS = 0x2446d0843e57df4ac3a0bea871a6594f30183d50;

  struct HomeCapacity {
    uint guests;
    uint bedroom;
    uint bed;
    uint bath;
  }

  struct HomeFeature {
    bool internet;
    bool kitchen;
    bool iron;
    bool hangers;
  }

  struct HomeData {
    string name;
    string description;
    string streetAddress;

    uint price; // Ether unit by wei

    // feature
    //HomeFeature feature;
    bool internet;
    bool kitchen;
    bool iron;
    bool hangers;

    // capacity
    //HomeCapacity capacity;
    uint guests;
    uint bedroom;
    uint bed;
    uint bathroom;
  }

  struct BookData {
    address booker;
    uint startDate; // day unit
    uint duration;
    uint checkinAt;
    uint checkoutAt;
    uint bookedAt;
    uint cancelledAt;
    bool isValid;
    bool needResolve;
    string needResolveReason;
    uint resolveRefundRate;
    uint sentAmount;
  }

  struct Review {
    uint createdAt;
    address commenter;
    uint rate;
    string message;
    bytes32 bookDataHash;
  }

  address public owner;
  address public judge;
  uint public availableAmount;

  HomeData private detail;
  uint refundRate;

  mapping (bytes32 => HomeData) private bookedHomeData;
  mapping (bytes32 => BookData) private bookedData;
  mapping (uint => bytes32) public bookedDates; // index by day
  mapping (bytes32 => Review) public reviews;

  // Event notification
  EventContract eventContract;

  modifier onlyJudge() {
    if (msg.sender == judge) {
      _;
    }
  }

  modifier onlyOwner() {
    if (msg.sender == owner) {
      _;
    }
  }

  function getDetail() public constant returns (HomeData) {
    return detail;
  }

  function Home(address _judge, string _name, string _description, string _streetAddress, uint _price) public {
    judge = _judge;
    owner = msg.sender;

    HomeData memory info;
    info.name = _name;
    info.price = _price;
    info.description = _description;
    info.streetAddress = _streetAddress;

    detail = info;

    refundRate = 100;

    eventContract = EventContract(EVENT_ADDRESS);
  }

  function updateInfo(string _name, string _description, string _streetAddress, uint _price) public onlyOwner {
    detail.name = _name;
    detail.price = _price;
    detail.description = _description;
    detail.streetAddress = _streetAddress;
    eventContract.updateInfo(_name, _description, _streetAddress, _price);
  }

  function updateCapacity(uint _guests, uint _bed, uint _bedroom, uint _bathroom) public onlyOwner {
    detail.guests = _guests;
    detail.bed = _bed;
    detail.bedroom = _bedroom;
    detail.bathroom = _bathroom;
    eventContract.updateCapacity(_guests, _bed, _bedroom, _bathroom);
  }

  function updateFeature(bool _internet, bool _kitchen, bool _iron, bool _hangers) public onlyOwner {
    detail.internet = _internet;
    detail.kitchen = _kitchen;
    detail.iron = _iron;
    detail.hangers = _hangers;
    eventContract.updateFeature(_internet, _kitchen, _iron, _hangers);
  }

  // start date must in day unit
  function book(uint _startDate, uint _duration) public payable {
    if (msg.value >= detail.price * _duration) {
      // create new book data
      BookData memory newBookData;
      newBookData.booker = msg.sender;
      newBookData.startDate = _startDate;
      newBookData.duration = _duration;
      newBookData.bookedAt = now;
      newBookData.isValid = true;
      newBookData.sentAmount = msg.value;

      // calculate book data hash to lookup later
      bytes32 bookDataHash = keccak256(newBookData.booker, newBookData.startDate, newBookData.duration,
        newBookData.bookedAt, newBookData.isValid, newBookData.sentAmount);
      bookedData[bookDataHash] = newBookData;
      bookedHomeData[bookDataHash] = detail;

      for (uint i = 0; i < _duration; i++) {
        if (bookedDates[_startDate + i] == 0) {
          bookedDates[_startDate + i] = bookDataHash;
        } else {
          revert();
        }
      }
      eventContract.book(bookDataHash, _startDate, _duration);
    }
  }

  function cancel(bytes32 _bookDataHash) payable public {
    BookData memory bookData = bookedData[_bookDataHash];

    require(bookData.isValid);
    require(msg.sender == bookData.booker);
    require(now <= bookData.startDate);

    uint refundAmount = bookData.sentAmount * refundRate / 100;
    availableAmount += bookData.sentAmount - refundAmount;
    bookData.sentAmount = 0;
    bookData.cancelledAt = now;
    bookData.isValid = false;

    // clear booked date
    for (uint i = 0; i < bookData.duration; i++) {
      delete(bookedDates[bookData.startDate + i]);
    }

    msg.sender.transfer(refundAmount);
    eventContract.cancel(_bookDataHash, bookData.cancelledAt);
  }

  function checkin(bytes32 _bookDataHash) public {
    BookData memory bookData = bookedData[_bookDataHash];

    require(bookData.isValid);
    require(msg.sender == bookData.booker);

    uint startDate = (bookData.startDate * 24 + 12) * 60 * 60 * 1000;
    require(now >= startDate);

    bookData.checkinAt = now;

    bookedData[_bookDataHash] = bookData;
    eventContract.checkin(_bookDataHash, bookData.checkinAt);
  }

  function checkout(bytes32 _bookDataHash) public {
    BookData memory bookData = bookedData[_bookDataHash];

    require(bookData.isValid);
    require(msg.sender == bookData.booker);
    require(bookData.checkinAt > 0);
    require(bookData.checkoutAt == 0);

    uint startDate = (bookData.startDate * 24 + 12) * 60 * 60 * 1000;
    require(now >= startDate);

    bookData.checkoutAt = now;
    availableAmount += bookData.sentAmount;
    bookData.sentAmount = 0;
    eventContract.checkout(_bookDataHash, bookData.checkoutAt);
  }

  function postReview(bytes32 _bookDataHash, uint _rate, string _message) public {
    BookData memory bookData = bookedData[_bookDataHash];

    require(bookData.isValid);
    require(msg.sender == bookData.booker);

    Review memory newReview;
    newReview.createdAt = now;
    newReview.commenter = msg.sender;
    newReview.rate = _rate;
    newReview.message = _message;
    newReview.bookDataHash = _bookDataHash;

    reviews[_bookDataHash] = newReview;
  }

  function requireResolve(bytes32 _bookDataHash, string _message) public {
    BookData memory bookData = bookedData[_bookDataHash];

    require(bookData.isValid);
    require(bookData.booker == msg.sender);
    require(!bookData.needResolve);
    require(bookData.checkinAt > 0);
    require(bookData.checkoutAt == 0);

    bookData.needResolve = true;
    bookData.needResolveReason = _message;

    bookedData[_bookDataHash] = bookData;
    eventContract.requireResolve(_bookDataHash, _message);
  }

  function resolveConflict(bytes32 _bookDataHash, uint _refundRate) public onlyJudge payable {
    BookData memory bookData = bookedData[_bookDataHash];

    require(bookData.isValid);
    require(bookData.needResolve);

    uint refundAmount = bookData.sentAmount * _refundRate / 100;
    availableAmount += bookData.sentAmount - refundAmount;
    bookData.sentAmount = 0;
    bookData.resolveRefundRate = _refundRate;

    bookData.booker.transfer(refundAmount);
    
  }

  function withdraw() public onlyOwner payable {
    uint amount = availableAmount;
    availableAmount = 0;
    owner.transfer(amount);
  }

  function withdrawBook(bytes32 _bookDataHash) public onlyOwner payable {
    BookData memory bookData = bookedData[_bookDataHash];

    require(bookData.isValid);
    require(!bookData.needResolve);

    uint canClaimDate = ((bookData.startDate + bookData.duration + 3) * 24 + 12) * 60 * 60 * 1000;
    require(now >= canClaimDate);

    uint amount = bookData.sentAmount;
    bookData.sentAmount = 0;
    owner.transfer(amount);
  }
}
