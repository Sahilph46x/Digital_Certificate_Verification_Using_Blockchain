import React, { useState } from "react";
import { web3, contract } from "../utils/web3";
import "./IssueCertificate.css";


const IssueCertificate = () => {
    const [certificateID, setCertificateID] = useState("");
    const [studentName, setStudentName] = useState("");
    const [courseName, setCourseName] = useState("");
    const [university, setUniversity] = useState("");

    const issueCertificate = async () => {
        try {
          console.log("Requesting accounts...");
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          console.log("Connected account:", accounts[0]);
      
          console.log("Sending transaction...");
          await contract.methods
            .issueCertificate(certificateID, studentName, courseName, university)
            .send({ from: accounts[0] });
      
          alert("Certificate Issued!");
        } catch (error) {
          console.error("Transaction error:", error);
      
          if (error.code === 4001) {
            alert("Transaction was canceled. Please try again.");
          } else {
            alert("An error occurred while issuing the certificate.");
          }
        }
      };
    return (
        <div className="issue-container">
            <h1>Issue Certificate</h1>
            <input type="text" placeholder="Certificate ID" onChange={(e) => setCertificateID(e.target.value)} />
            <input type="text" placeholder="Student Name" onChange={(e) => setStudentName(e.target.value)} />
            <input type="text" placeholder="Course Name" onChange={(e) => setCourseName(e.target.value)} />
            <input type="text" placeholder="University" onChange={(e) => setUniversity(e.target.value)} />
            <button onClick={issueCertificate}>Issue</button>
        </div>
    );
};



export default IssueCertificate;
