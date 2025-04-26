import React, { useState } from "react";
import { contract } from "../utils/web3";
import "./VerifyCertificate.css";


const VerifyCertificate = () => {
    const [certificateID, setCertificateID] = useState("");
    const [certificateData, setCertificateData] = useState(null);

    const verifyCertificate = async () => {
        try {
          const cert = await contract.methods.verifyCertificate(certificateID).call();
          setCertificateData(cert);
        } catch (error) {
          if (error.message.includes("User denied transaction signature")) {
            alert("Transaction was canceled. Please try again.");
          } else {
            console.error("Error verifying certificate:", error);
            alert("An error occurred while verifying the certificate.");
          }
        }
      };

    return (
        <div className="verify-container">
            <h2>Verify Certificate</h2>
            <input type="text" placeholder="Certificate ID" onChange={(e) => setCertificateID(e.target.value)} />
            <button onClick={verifyCertificate}>Verify</button>
            {certificateData && (
                <div>
                    <p>Student: {certificateData[0]}</p>
                    <p>Course: {certificateData[1]}</p>
                    <p>University: {certificateData[2]}</p>
                    <p>Issue Date: {new Date(parseInt(certificateData[3]) * 1000).toLocaleString()}</p>
                    <p>Status: {certificateData[4] ? "Valid" : "Revoked"}</p>
                </div>
            )}
        </div>
    );
};

export default VerifyCertificate;
