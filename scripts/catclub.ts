import { ethers } from "hardhat";

async function main() {
  const catclub = await ethers.deployContract("CatClub");
  await catclub.waitForDeployment();
  console.log(`catclub deployed at  ${catclub.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
