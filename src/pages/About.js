import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1><center>About</center></h1>
      <h2><center>Blockchain-Based Certificate Issuance and Verification System</center></h2>
      <p>
        A blockchain-powered certificate management system is designed to provide a secure, transparent, and tamper-proof way to issue , verify and revoke Digital Certificates. It is built using React, Web3.js, and Solidity, this platform leverages smart contracts to store certificate data immutably on the blockchain, eliminating the risk of forgery or data manipulation.
      </p>
      <p>
        <h2>The system consists of different key functionalities:</h2>
      </p>
      <ol>
        <li><b>Issue Certificate:</b> Authorized institutions can generate and issue certificates directly on the blockchain. Each certificate includes essential details such as the student's name, course name, university, issue date, and validity status. The issuing authority interacts with the smart contract using MetaMask, ensuring only authenticated entities can create certificates.</li>
        <li><b>Verify Certificate:</b> Anyone can verify the authenticity of a certificate by querying the blockchain. Instead of relying on centralized databases, the verification process is instant, decentralized, and accessible globally. Employers, institutions, or students can confirm the legitimacy of a certificate without the need for third-party verification services.</li>
        <li><b>Revoke Certificate:</b> In case of any discrepancies or fraudulent activities, the issuing authority can revoke a certificate by updating its status on the blockchain. This action invalidates the certificate permanently, preventing its misuse or unauthorized verification.</li>
        <li><b>View Certificates:</b> Users can view all valid certificates issued on the blockchain, including details like student name, course name, university, issue date, and status. The platform filters out revoked certificates, ensuring only authentic and active certificates are displayed.</li>     
      </ol>
    </div>
  );
};

export default About;