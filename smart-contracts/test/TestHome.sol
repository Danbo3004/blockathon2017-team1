pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Home.sol";

contract TestHome {
  uint public initialBalance = 4 ether;

  function testBook() public {
    Home h = Home(DeployedAddresses.Home());
  }
}
