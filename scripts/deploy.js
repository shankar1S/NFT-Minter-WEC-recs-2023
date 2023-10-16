async function main() {
   const MyNFT = await ethers.getContractFactory("MyNFT");

   const myNFT = await MyNFT.deploy();  
   console.log("Contract deployed to address:", myNFT.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
