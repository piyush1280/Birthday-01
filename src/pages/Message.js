import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import TypingText from "../components/TypingText";

import "../styles/Message.css";

function Message() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="message-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="glass-card">
        <h1>💖 Special Message</h1>

        <TypingText />

        <button
          className="glow-btn"
          onClick={() => navigate("/timeline")}
        >
          Continue ✨
        </button>
      </div>
    </motion.div>
  );
}

export default Message;