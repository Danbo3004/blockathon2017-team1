module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      host: "www.blockathon.asia",
      port: 8545,
      gas: 3000000,
      network_id: "4",
      from: "0xa2a13119a74b91bc7e7c1a039d061cbb333f721f" // Password: 123456789
    },
  }
};
