import "@nomicfoundation/hardhat-ethers"; 
import "@typechain/hardhat";

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.28",
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v6", 
  },
};

export default config;