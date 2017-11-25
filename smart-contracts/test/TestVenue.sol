pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Venue.sol";

contract TestVenue {
  uint public initialBalance = 4 ether;
  function testBook() public {
    Venue v = Venue(DeployedAddresses.Venue());
    v.book(25,2);
    Assert.equal(v.bookSchedule.length, 1, "EEROR");
  }
}