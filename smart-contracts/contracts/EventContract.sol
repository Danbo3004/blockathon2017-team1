pragma solidity 0.4.18;

contract EventContract {
    address public owner;

    function EventContract() public {
        owner = msg.sender;
    }

    event UpdateInfo(address caller, string _name, string _description, string _streetAddress, uint _price);
    event UpdateCapacity(address caller, uint _guests, uint _bed, uint _bedroom, uint _bathroom);
    event UpdateFeature(address caller, bool _internet, bool _kitchen, bool _iron, bool _hangers);
    event Book(address caller, bytes32 _bookDataHash, uint _startDate, uint _duration);
    event Cancel(address caller, bytes32 _bookDataHash, uint _cancelledAt);
    event Checkin(address caller, bytes32 _bookDataHash, uint _checkinAt);
    event Checkout(address caller, bytes32 _bookDataHash, uint _checkoutAt);
    event RequireResolve(address caller, address _bookDataHash, string _message);
    
    function updateInfo(string _name, string _description, string _streetAddress, uint _price) public {
        UpdateInfo(msg.sender, _name, _description, _streetAddress, _price);
    }
    function updateCapacity(uint _guests, uint _bed, uint _bedroom, uint _bathroom) public {
        UpdateCapacity(msg.sender, _guests, _bed, _bedroom, _bathroom);
    }
    function updateFeature(bool _internet, bool _kitchen, bool _iron, bool _hangers)public {
        UpdateFeature(msg.sender, _internet, _kitchen, _iron, _hangers);
    }
    function book(bytes32 _bookDataHash, uint _startDate, uint _duration) public {
        Book(msg.sender, _bookDataHash, _startDate, _duration);
    }
    function cancel(bytes32 _bookDataHash, uint _cancelledAt) public {
        Cancel(msg.sender, _bookDataHash, _cancelledAt);
    }
    function checkin(bytes32 _bookDataHash, uint _checkinAt) public {
        Checkin(msg.sender, _bookDataHash, _checkinAt);
    }
    function checkout(bytes32 _bookDataHash, uint _checkoutAt) public {
        Checkout(msg.sender, _bookDataHash, _checkoutAt);
    }
    function requireResolve (address _bookDataHash, string _message) public {
        RequireResolve(msg.sender, _bookDataHash, _message);
    }

}