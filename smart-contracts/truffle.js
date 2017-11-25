module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "www.blockathon.asia",
      gas: 4612388,
      from: "0x763baAe4Db488e4d185720928639a70ea06EE196",
      port: 8545,
      network_id: "4" // Match any network id
    },
  }
};