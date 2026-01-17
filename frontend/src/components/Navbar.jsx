import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ isDark, toggleTheme }) => {
  const { t, i18n } = useTranslation(); // translation function + i18n
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Nav items with translation
  const navItems = [
    { path: "/", name: t("navbar.home") },
    { path: "/about", name: t("navbar.about") },
    { path: "/projects", name: t("navbar.projects") },
    { path: "/contact", name: t("navbar.contact") },
  ];

  return (
    <>
      {/* Theme & Language Controls */}
      <div className="fixed top-24 right-4 z-50 flex flex-col gap-2 items-center">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={isDark ? t("navbar.switchLight") : t("navbar.switchDark")}
          className={`p-3 rounded-full backdrop-blur-xl transition focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            isDark
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200 shadow-lg"
          }`}
          style={{ minWidth: "44px", minHeight: "44px" }}
        >
          {isDark ? "🌙" : "☀️"}
        </button>

        {/* Language buttons */}
        <div className="flex gap-1 justify-center mt-1">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="px-2 py-1 rounded bg-purple-500 text-white text-sm hover:bg-purple-600 transition"
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("fr")}
            className="px-2 py-1 rounded bg-pink-500 text-white text-sm hover:bg-pink-600 transition"
          >
            FR
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? `${isDark ? "bg-black" : "bg-white"} shadow-lg py-3`
            : `${
                isDark
                  ? "bg-gradient-to-r from-gray-900 via-black to-gray-800"
                  : "bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
              } py-4`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1
            className={`text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
              isDark
                ? "from-purple-400 via-pink-400 to-purple-400"
                : "from-purple-600 via-pink-600 to-purple-600"
            }`}
          >
            {t("navbar.name")}
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={({ isActive }) =>
                  `px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isActive
                      ? isDark
                        ? "text-white border-2 border-purple-400 bg-purple-500/20"
                        : "text-purple-600 border-2 border-purple-500 bg-purple-100"
                      : hoveredIndex === index
                      ? isDark
                        ? "text-white bg-purple-500/30 border border-purple-400 shadow-lg scale-105"
                        : "text-purple-600 bg-purple-200 border border-purple-500 shadow-lg scale-105"
                      : isDark
                      ? "text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border hover:border-purple-400 hover:shadow-md hover:scale-105"
                      : "text-gray-600 hover:text-purple-600 hover:bg-purple-100 hover:border hover:border-purple-500 hover:shadow-md hover:scale-105"
                  }`
                }
                style={{ minHeight: "44px" }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden mt-4 px-4 pb-4 space-y-3 ${
              isDark ? "bg-black" : "bg-white"
            } backdrop-blur-xl`}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center py-3 rounded-xl text-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isActive
                      ? isDark
                        ? "text-white bg-purple-600/30"
                        : "text-purple-600 bg-purple-100"
                      : isDark
                      ? "text-gray-300 hover:text-white hover:bg-purple-600/20"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-100"
                  }`
                }
                role="menuitem"
                style={{ minHeight: "44px" }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
