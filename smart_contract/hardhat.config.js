require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/RLaVZP0JN4KCPpZk6dXE1Mw8S4P6Zjqd",
      accounts: [
        "fbb139ea0d6b7a2648a9422884550510461f6319ca3aa9fe26f76dce9ffb7b3c",
      ],
    },
  },
};
