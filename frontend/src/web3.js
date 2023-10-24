import Web3 from 'web3';
window.ethereum.enable();

const web3 = new Web3(window.web3.currentProvider);


// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()

await provider.getBlockNumber()
// 16987688

// Get the balance of an account (by address or ENS name, if supported by network)
balance = await provider.getBalance("ethers.eth")
// { BigNumber: "182334002436162568" }

// Often you need to format the output to something more user-friendly,
// such as in ether (instead of wei)
ethers.utils.formatEther(balance)
// '0.182334002436162568'

// If a user enters a string in an input field, you may need
// to convert it from ether (as a string) to wei (as a BigNumber)
ethers.utils.parseEther("1.0")



export default web3;

