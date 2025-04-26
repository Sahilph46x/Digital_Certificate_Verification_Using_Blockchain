import React, { useState } from "react";
import { web3, contract } from "../utils/web3";
import "./RevokeCertificate.css";


const RevokeCertificate = () => {
    const [certificateID, setCertificateID] = useState("");

    const revokeCertificate = async () => {
        try {
          const accounts = await web3.eth.getAccounts();
          await contract.methods.revokeCertificate(certificateID).send({ from: accounts[0] });
          alert("Certificate Revoked!");
        } catch (error) {
          if (error.message.includes("User denied transaction signature")) {
            alert("Transaction was canceled. Please try again.");
          } else {
            console.error("Error revoking certificate:", error);
            alert("An error occurred while revoking the certificate.");
          }
        }
      };

    return (
        <div className="revoke-container">
            <h2>Revoke Certificate</h2>
            <input type="text" placeholder="Certificate ID" onChange={(e) => setCertificateID(e.target.value)} />
            <button onClick={revokeCertificate}>Revoke</button>
        </div>
    );
};

export default RevokeCertificate;
