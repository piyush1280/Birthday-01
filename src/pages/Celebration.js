import React from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

import "../styles/Celebration.css";

function Celebration() {
  return (
    <motion.div
      className="celebration-page"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
    >
      <Confetti />

      <div className="cake">🎂</div>

      <h1 className="birthday-text">
        Happy Birthday ❤️
      </h1>

      <div className="fireworks">
        ✨ 🎆 ✨ 🎆 ✨
      </div>
    </motion.div>
  );
}

export default Celebration;