import React from 'react';
import { NavLink } from "react-router-dom";



export default function FrontPage() {
  return (
    <div>
      <h1>Welcome to NFT-Minter</h1>
      <h2>Here a user can Mint upto 3000 NFTs</h2>
      <h3>Follow the link to install Meta Mask wallet if not installed👇🏼 <a href="https://metamask.io/download.html">Meta Mask</a></h3>
  
      <NavLink to="/MintingPage">
      <button>Mint NFTs</button>
      </NavLink>
    </div>
  );
}





/*

import React from 'react';
import { NavLink } from "react-router-dom";
import Web3 from "web3";

function FrontPage() {
  async function connectToMetaMask() {
    try {
      if (window.ethereum) {
        // Request access to the user's MetaMask account
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Initialize Web3.js with the MetaMask provider
        const web3 = new Web3(window.ethereum);

        // Now you can use 'web3' to interact with the user's MetaMask wallet
        console.log("Connected to MetaMask:", web3);

        // You can also check the user's address
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        console.log("User's Ethereum address:", userAddress);
      } else {
        console.error("MetaMask is not installed. Please install it.");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  }

  return (
    <div>
      <h1>Welcome to NFT-Minter</h1>
      <h2>Here a user can Mint up to 3000 NFTs</h2>
      <NavLink to="/MintingPage">
        <button>Mint NFTs</button>
      </NavLink>
      <button onClick={connectToMetaMask}>Connect to MetaMask</button>
    </div>
  );
}

export default FrontPage;
*/
