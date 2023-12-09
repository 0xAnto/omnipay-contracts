import { ethers } from "hardhat";

async function main() {
  const testusdc = await ethers.deployContract("testUSDC");
  await testusdc.waitForDeployment();
  console.log(`testusdc deployed at  ${testusdc.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
