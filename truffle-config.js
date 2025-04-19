const HDWalletProvider = require("@truffle/hdwallet-provider");
const path = require("path");

const mnemonic =
  "rival soap tube visit ramp gasp online wage risk friend pistol tenant";

module.exports = {
  contracts_build_directory: path.join(__dirname, "/contracts"),
  networks: {
    development: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: { phrase: mnemonic },
          providerOrUrl: "http://127.0.0.1:7545",
          numberOfAddresses: 10,
        }),
      network_id: "*",
      gas: 6721975, // Augmenter si nécessaire
      gasPrice: 20000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.13",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  db: {
    enabled: false,
  },
};
