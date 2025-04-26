import { contract, getAccount } from "../utils/web3";

async function issueCertificate(certificateID, studentName, courseName, university) {
  try {
    // Validate inputs
    if (!certificateID || !studentName || !courseName || !university) {
      throw new Error("All fields are required.");
    }

    const fromAddress = await getAccount(); // Get the sender's address
    if (!fromAddress) {
      throw new Error("No connected wallet. Please connect MetaMask.");
    }
    console.log("Issuing certificate from:", fromAddress);

    await contract.methods.issueCertificate(certificateID, studentName, courseName, university)
      .send({ from: fromAddress });

    alert("Certificate issued successfully!");
  } catch (error) {
    console.error("Error issuing certificate:", error);
    alert(`Error issuing certificate: ${error.message}`);
  }
}

export default issueCertificate;