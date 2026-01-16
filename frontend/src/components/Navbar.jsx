import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-24 right-6 z-50 p-3 rounded-full transition-all duration-500 ${
          isDark 
            ? 'bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700' 
            : 'bg-white/80 hover:bg-gray-100 border border-gray-200 shadow-lg'
        } backdrop-blur-xl`}
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6">
          {/* Sun icon (Light mode) */}
          <svg
            className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
              isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            } text-yellow-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          
          {/* Moon icon (Dark mode) */}
          <svg
            className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
              isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            } text-purple-400`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </button>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? `${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-xl shadow-lg ${isDark ? 'shadow-purple-500/10' : 'shadow-gray-200'} py-3`
            : `${isDark ? 'bg-gradient-to-r from-gray-900 via-black to-gray-800' : 'bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50'} py-4`
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo with animated glow */}
          <div className="relative group">
            <h1 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
              isDark ? 'from-purple-400 via-pink-400 to-purple-400' : 'from-purple-600 via-pink-600 to-purple-600'
            } animate-pulse cursor-pointer`}>
              El idrissi salmi Afnane
            </h1>
            <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
              isDark ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-purple-400 to-pink-400'
            }`}></div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-2 items-center">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={({ isActive }) =>
                  `relative px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full overflow-hidden group
                  ${isActive ? (isDark ? 'text-white' : 'text-purple-600') : (isDark ? 'text-gray-400' : 'text-gray-600')}`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Background glow effect */}
                    <span
                      className={`absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 transition-all duration-500 ${
                        isActive
                          ? "opacity-100 blur-0"
                          : hoveredIndex === index
                          ? "opacity-70 blur-sm"
                          : "opacity-0 blur-xl"
                      }`}
                    ></span>

                    {/* Animated border */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isActive || hoveredIndex === index
                          ? "border-2 border-purple-400"
                          : "border border-transparent"
                      }`}
                    ></span>

                    {/* Shimmer effect */}
                    {(isActive || hoveredIndex === index) && (
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
                      </span>
                    )}

                    {/* Text */}
                    <span className="relative z-10 flex items-center gap-2">
                      {item.name}
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      )}
                    </span>

                    {/* Hover particles */}
                    {hoveredIndex === index && !isActive && (
                      <>
                        <span className="absolute top-0 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></span>
                        <span className="absolute bottom-0 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></span>
                      </>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;