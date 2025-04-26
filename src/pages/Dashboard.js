import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleViewCertificates = () => {
    // Check if the current route is already "view-certificates"
    if (location.pathname !== "/dashboard/view-certificates") {
      navigate("view-certificates"); // Ensure the path matches the route
    }
  };

  return (
    <div className="dashboard-container">
    <div className="view-container">
      <div className="header">
        <h1>Certificates</h1>
        <a
          href="https://sepolia.etherscan.io/address/0x9A5Cd10A7e2ad1FC8497486436ee300fC662D32D"
          target="_blank"
          rel="noopener noreferrer"
          className="etherscan-link"
        >
          View History
        </a>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;