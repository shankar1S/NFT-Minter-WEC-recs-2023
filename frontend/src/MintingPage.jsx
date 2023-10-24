import React, { useState } from "react";
import axios from 'axios';
import FormData from 'form-data';

// Replace with your actual Pinata API key and secret
const PINATA_API_KEY = '28bd89b59d124e05c513';
const PINATA_SECRET_API_KEY = '8b265b44271c8adc54725e8b46f14ed9c6a98a70682ab1bcaa8570ac19754644';

// Replace with your actual JWT token
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5NWM5YzQzMS1jNDFlLTRhZDMtYjczMC1mYjY3ZDA0MGY2OWYiLCJlbWFpbCI6Imx2Zy5zaGFua2FyYWdvdWRhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIyOGJkODliNTlkMTI0ZTA1YzUxMyIsInNjb3BlZEtleVNlY3JldCI6IjhiMjY1YjQ0MjcxYzhhZGM1NDcyNWU4YjQ2ZjE0ZWQ5YzZhOThhNzA2ODJhYjFiY2FhODU3MGFjMTk3NTQ2NDQiLCJpYXQiOjE2OTc5NzQxNjl9.nD5xZK2qy4HbSkhS8tLQvsrXrYgHEkSrhqjgnkJgFZU';

function MintingPage() {
  const [imageFile, setImageFile] = useState(null);
  const [metadata, setMetadata] = useState('');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      // Append metadata to the form data
      formData.append("pinataMetadata", JSON.stringify({ name: metadata }));

      try {
        const response = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
              Authorization: `Bearer ${JWT}`, // Use your JWT token
              pinata_api_key: PINATA_API_KEY, // Use your Pinata API key
              pinata_secret_api_key: PINATA_SECRET_API_KEY, // Use your Pinata secret key
            },
          }
        );

        const ipfsHash = response.data.IpfsHash;
        // Store the IPFS hash or use it to mint the NFT
        console.log(`Image uploaded to IPFS with hash: ${ipfsHash}`);

        // After successfully uploading the image, you can call the minting function here
        // Example: handleMintNFT(ipfsHash);
      } catch (error) {
        console.error("Image upload to Pinata failed.", error);
      }
    }
  }

  // Rest of the code...
  const handleMintNFT = async (ipfsHash) => {
    if (!ipfsHash) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      // Call your Ethereum smart contract to mint the NFT using the IPFS hash
      // Example: const response = await myNftContract.mintNFT(ipfsHash);
      // console.log(`NFT Minted! Transaction hash: ${response.hash}`);
    } catch (error) {
      console.error("NFT minting failed.", error);
    }
  };

  return (
    // JSX and component rendering...
    <div className="App">
      <h2>Mint NFTs Page</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <input
        type="text"
        placeholder="Metadata (e.g., name)"
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
      />
      <button onClick={() => handleMintNFT("YOUR_IPFS_HASH")}>Mint NFT</button>
    </div>
  );
}

export default MintingPage;

