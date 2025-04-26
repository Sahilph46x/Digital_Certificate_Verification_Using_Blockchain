# Digital Certificate Verification System using Blockchain

This project is a **blockchain-powered certificate management system** designed to provide a secure, transparent, and tamper-proof way to issue, verify, and revoke digital certificates. Built using **React**, **Web3.js**, and **Solidity**, this platform leverages smart contracts to store certificate data immutably on the blockchain, eliminating the risk of forgery or data manipulation.

## Features

1. **Issue Certificate**: Authorized institutions can issue certificates directly on the blockchain.

2. **Verify Certificate**: Anyone can verify the authenticity of a certificate instantly and globally.

3. **Revoke Certificate**: Certificates can be revoked in case of discrepancies or fraudulent activities.

4. **View Certificates**: Users can view all valid certificates issued on the blockchain.

5. **View History**: Links to blockchain explorers (e.g., Etherscan) for transaction history.

## Tech Stack

- **Frontend**: React, React Router
- **Blockchain Integration**: Web3.js
- **Smart Contracts**: Solidity
- **Styling**: CSS

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MetaMask** browser extension for blockchain interaction

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/digital-certificate-frontend.git
cd digital-certificate-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following:

```plaintext
REACT_APP_CONTRACT_ADDRESS=<Your Smart Contract Address>
```

Replace `<Your Smart Contract Address>` with the deployed address of your smart contract.

### 4. Start the Development Server

```bash
npm start
```

Open http://localhost:3000 in your browser to view the app.

## Project Structure

```
digital-certificate-frontend/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
│   ├── utils/              # Utility functions (e.g., Web3 integration)
│   ├── contract/           # Smart contract ABI
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── styles/             # CSS files
├── .env.local              # Environment variables (not included in repo)
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

### How to Use

### A.Issue a Certificate

1.Navigate to the Issue Certificate page.
2.Fill in the required details (Certificate ID, Student Name, Course Name, University).
3.Click Issue to create the certificate on the blockchain.

### B.Verify a Certificate

1.Navigate to the Verify Certificate page.
2.Enter the Certificate ID.
3.Click Verify to check its authenticity.

### C.Revoke a Certificate

1.Navigate to the Revoke Certificate page.
2.Enter the Certificate ID.
3.Click Revoke to invalidate the certificate.

D.View History

1.On the Dashboard, click the View History button to view blockchain transactions on Etherscan.

### License
This project is licensed under the MIT License. 
