var Venue = artifacts.require("./Venue.sol");

module.exports = function(deployer) {
  deployer.deploy(Venue);
};
