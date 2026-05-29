import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/Gallery.css";

function Gallery() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="gallery-page"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
    >
      <h1>📸 Beautiful Memories</h1>

      <div className="gallery">
        <img src="https://media.baamboozle.com/uploads/images/89276/1635491053_96950.gif" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9y-1TDY1-b5ef_R4ztubub7wW6FyFVZwWnrCanHoejw&s" alt="" />
        <img src="https://cdn2.cdnstep.com/GTc91yphxHLSDvoHziGN/4-1.png" alt="" />
      </div>

      <button
        className="glow-btn"
        onClick={() => navigate("/message")}
      >
        Next Surprise ❤️
      </button>
    </motion.div>
  );
}

export default Gallery;