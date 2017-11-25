pragma solidity ^0.4.17;

contract Venue {
  struct BookData {
    string name; 
    uint capacity;
    uint price; // Ether unit by wei
    bool isValid;
    uint checkinAt;
    uint checkoutAt;
  }
  struct Review {
    address owner;
    uint rate;
    string message;
  }
  address public owner;
  address public consumer;
  BookData public detail;

  mapping (address => BookData) public bookdataHistory;
  mapping (uint => address) public bookSchedule;
  mapping (uint => address) public checkinSchedule;
  mapping (uint => address) public checkoutSchedule;
  Review[] public reviewHistory;

  modifier onlyOwner() {
    if (msg.sender == owner) {
      _;
    }
  }

  modifier onlyConsumer() {
    if (msg.sender == consumer) {
      _;
    }
  }

  modifier onlyInConsumer() {
    if (bookdataHistory[msg.sender].isValid) {
      _;
    } 
  }

  function Venue(string _name, uint _price, uint _capacity) public {
    owner = msg.sender;
    detail.isValid = true;
    detail.name = _name;
    detail.price = _price;
    detail.capacity = _capacity;
  }

  function update(string _name, uint _price, uint _capacity) public {
    delete(detail);
    detail.name = _name;
    detail.price = _price;
    detail.capacity = _capacity;
  }

  function cancel(uint refundRate) public {
    uint refundAmount = bookdataHistory[msg.sender].price * refundRate / 100;
    msg.sender.transfer(refundAmount);
  }

  function book(uint startDate, uint duration) public payable {
    // Capture venue detail
    bookdataHistory[msg.sender] = detail;
    // Mark on book map
    for ( uint i = 0; i < duration; i++ ) {
      bookSchedule[startDate + i] = msg.sender;
    }
  }

  function checkin(uint date) public {
    if (bookSchedule[date] == msg.sender) {
      consumer = msg.sender;
      checkinSchedule[date] = msg.sender;
      bookdataHistory[msg.sender].checkinAt = date;
    }
  }

  function checkout(uint date) public onlyConsumer {
    delete(consumer);
    checkoutSchedule[date] = msg.sender;
    bookdataHistory[msg.sender].checkoutAt = date;
  }

  function postReview(uint _rate, string _message) public onlyInConsumer {
    reviewHistory.push(Review({owner: msg.sender, rate: _rate, message: _message}));
  }
}
