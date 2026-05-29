import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingBalloons from "../components/FloatingBalloons";
import CountdownTimer from "../components/CountdownTimer";

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FloatingBalloons />

      <div className="glass-card">
        <h1>🎉 Happy Birthday 🎂</h1>

        <p>Special surprise waiting for you ❤️</p>

        <CountdownTimer />

        <button
          className="glow-btn"
          onClick={() => navigate("/gallery")}
        >
          Open Surprise
        </button>
      </div>
    </motion.div>
  );
}

export default Home;