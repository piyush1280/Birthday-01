import React from "react";
import { ReactTyped } from "react-typed";
import "../styles/TypingText.css";
function TypingText() {
  return (
    <div className="typing-container">
      <ReactTyped
        strings={[
          "You are the most special person ❤️",
          "Wishing you endless happiness 🎂",
          "May all your dreams come true ✨",
          "Happy Birthday Beautiful 💖",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
}

export default TypingText;