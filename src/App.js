import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Message from "./pages/Message";
import Timeline from "./pages/Timeline";
import Celebration from "./pages/Celebration";
import Navbar from "./components/Navbar";
import TypingText from "./components/TypingText";
import FloatingBalloons from "./components/FloatingBalloons";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Remove broken audio source until music.mp3 is added to public/ */}
      {/* Add a music.mp3 file to public/ if you want background audio. */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/message" element={<Message />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/typing" element={<TypingText />} />
        <Route path="/balloons" element={<FloatingBalloons />} />
        <Route path="/countdown" element={<CountdownTimer />} />
        <Route path="/celebration" element={<Celebration />} />
      </Routes>
    </Router>
  );
}

export default App;