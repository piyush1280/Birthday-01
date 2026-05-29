import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/Timeline.css";

function Timeline() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="timeline-page"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
    >
      <h1>💞 Memory Timeline</h1>

      <div className="timeline">
        <div className="timeline-card">
          <h3>2022</h3>
          <p>First beautiful meeting ❤️</p>
        </div>

        <div className="timeline-card">
          <h3>2024</h3>
          <p>Best memories together ✨</p>
        </div>

        <div className="timeline-card">
          <h3>2026</h3>
          <p>Celebrating your special day 🎂</p>
        </div>
      </div>

      <button
        className="glow-btn"
        onClick={() => navigate("/celebration")}
      >
        Final Surprise 🎉
      </button>
    </motion.div>
  );
}

export default Timeline;