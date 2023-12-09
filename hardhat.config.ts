import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { key } from "./const";

const deployKey = key;
// address 0xB1Feb1C2282c8AFf3a67623A1E8C06Af12Faf273
const config: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {
    hardhat: {
      chainId: 1337,
    },

    arbitrumGoerli: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      chainId: 421613,
      accounts: [deployKey],
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io/",
      chainId: 534351,
      accounts: [deployKey],
    },
    polygonMumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      chainId: 80001,
      accounts: [deployKey],
    },
    baseGoerli: {
      url: "https://goerli.base.org",
      chainId: 84531,
      accounts: [deployKey],
    },
    mantleTestnet: {
      url: "https://rpc.testnet.mantle.xyz/",
      chainId: 5001,
      accounts: [deployKey],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumGoerli: "ZGIJ2ADJ4QWX5T9M1I9UC4ZC8WI97D99V6",
      scrollSepolia: "H9HUSBKUJMW5XRHYJ15SXP6VC3YXHTUST3",
      polygonMumbai: "QGHDSE8RP8RNFJ3R8WQMARU3DY8IIB9HNV",
      baseGoerli: "8H8CCSM6B8RF7RNYEQKAJBJZY8UKRARYNX",
    },
    customChains: [
      {
        network: "scrollSepolia",
        chainId: 534351,
        urls: {
          apiURL: "https://api-sepolia.scrollscan.com/api",
          browserURL: "https://api-sepolia.scrollscan.com/",
        },
      },
    ],
  },
};

export default config;
