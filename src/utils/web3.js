import Web3 from "web3";
import contractABI from "../contract/contractABI.json";

// Ensure MetaMask is available
if (!window.ethereum) {
  alert("❌ MetaMask is not installed! Please install it.");
  throw new Error("MetaMask not found.");
}

const web3 = new Web3(window.ethereum);

// Function to request accounts
async function getAccount() {
  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    
    if (!accounts || accounts.length === 0) {
      alert("❌ No MetaMask accounts found! Please connect your wallet.");
      throw new Error("No accounts found.");
    }

    console.log("✅ Connected MetaMask Account:", accounts[0]);
    return accounts[0]; // Return first account
  } catch (error) {
    console.error("❌ MetaMask connection error:", error);
    alert("❌ Failed to connect to MetaMask. Try again.");
    return null;
  }
}

// Load contract address from .env.local
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
if (!contractAddress) {
  throw new Error("❌ Contract address missing! Check .env.local file.");
}

// Initialize the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);


export { web3, contract, getAccount };
