import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollManager from "./ScrollManager";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  // Theme state (dark / light)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // dark by default
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <Router>
      <ScrollManager />

      <div className={isDark ? "dark" : "light"}>
        {/* Navbar */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
<div className="pt-24">

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/about" element={<About isDark={isDark} />} />
          <Route path="/projects" element={<Projects isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
        </Routes>
</div>

        {/* Footer */}
        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;
