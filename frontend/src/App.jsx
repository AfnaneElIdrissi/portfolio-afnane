import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  // Get saved theme or default to dark
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; 
    // Change true to false for light default
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={isDark ? 'dark' : 'light'}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/about" element={<About isDark={isDark} />} />
          <Route path="/projects" element={<Projects isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;