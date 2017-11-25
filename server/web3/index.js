let Web3 = require('web3');
let config = require('../config/appConfig');
let models = require('../models');

let web3 = new Web3(new Web3.providers.HttpProvider(config.networkUrl));

let HomeContractEvent = web3.eth.contract(config.homeContractEventAbi);

let homeContractEventInstance = HomeContractEvent.at(config.homeContractEventAddress);
homeContractEventInstance.allEvents(function (error, log) {
  if (!error) {
    console.log(log);
  }
});

module.exports = web3;
