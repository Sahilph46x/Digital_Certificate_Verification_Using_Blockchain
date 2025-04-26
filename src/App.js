import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import IssueCertificate from "./components/IssueCertificate";
import VerifyCertificate from "./components/VerifyCertificate";
import RevokeCertificate from "./components/RevokeCertificate";
import About from "./pages/About";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/issue" element={<IssueCertificate />} />
                <Route path="/verify" element={<VerifyCertificate />} />
                <Route path="/revoke" element={<RevokeCertificate />} />
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
        </Router>
    );
}

export default App;