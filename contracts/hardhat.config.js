require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config({ path: '.env' }).parsed;

module.exports = {
  solidity: "0.8.11",
  networks: {
    rinkeby: {
      url: process.env.RPC_URL,
      accounts: [`${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    mainnet: {
      url: process.env.RPC_URL,
      accounts: [`${process.env.DEPLOY_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};
