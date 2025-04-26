import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-header">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <img src="/logo.png" alt="Logo" />
                        <span className="logo-text">Digital Certificate Verification System using Blockchain</span>
                    </Link>
                </div>
            </div>
            <ul className="nav-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/issue">Issue</Link></li>
                <li><Link to="/verify">Verify</Link></li>
                <li><Link to="/revoke">Revoke</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;