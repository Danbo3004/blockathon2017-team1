let Web3 = require('web3');
let config = require('../config/appConfig');
let models = require('../models/index');

let web3 = new Web3(new Web3.providers.HttpProvider(config.networkUrl));

let HomeContractEvent = web3.eth.contract(config.homeContractEventAbi);

let homeContractEventInstance = HomeContractEvent.at(config.homeContractEventAddress);
homeContractEventInstance.allEvents(function (error, log) {
  if (error) {
    return;
  }

  switch (log.event) {
    case 'NewHome':
      models.Home.findOne({
        where: {
          contractAddress: log.args._contractAddress
        }
      }).then(function (home) {
        let values = {
          contractAddress: log.args._contractAddress,
          owner: log.args._owner,
          name: log.args._name,
          description: log.args._description,
          streetAddress: log.args._streetAddress,
          price: log.args._price.toString(16)
        };

        if (home) {
          return home.update(values);
        } else {
          return models.Home.create(values);
        }
      });
      break;
    case 'UpdateInfo':
      models.Home.findOne({
        where: {
          contractAddress: log.args._contractAddress
        }
      }).then(function (home) {
        let values = {
          contractAddress: log.args._contractAddress,
          name: log.args._name,
          description: log.args._description,
          streetAddress: log.args._streetAddress,
          price: log.args._price.toString('hex')
        };

        if (home) {
          return home.update(values);
        } else {
          return models.Home.create(values);
        }
      });
      break;
    case 'UpdateCapacity':
      models.Home.findOne({
        where: {
          contractAddress: log.args.caller
        }
      }).then(function (home) {
        let values = {
          contractAddress: log.args.caller,
          guests: log.args._guests,
          bed: log.args._bed,
          bedroom: log.args._bedroom,
          bathroom: log.args._bathroom
        };

        if (home) {
          return home.update(values);
        } else {
          return models.Home.create(values);
        }
      });
      break;
    case 'UpdateFeature':
      models.Home.findOne({
        where: {
          contractAddress: log.args.caller
        }
      }).then(function (home) {
        let values = {
          contractAddress: log.args.caller,
          internet: log.args._internet,
          kitchen: log.args._kitchen,
          iron: log.args._iron,
          hangers: log.args._hangers
        };

        if (home) {
          return home.update(values);
        } else {
          return models.Home.create(values);
        }
      });
      break;
    default:
  }
});

module.exports = web3;
