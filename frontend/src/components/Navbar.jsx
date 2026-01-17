import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ isDark, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: t("navbar.home") },
    { path: "/about", label: t("navbar.about") },
    { path: "/projects", label: t("navbar.projects") },
    { path: "/contact", label: t("navbar.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-gray-900 shadow-md py-2"
            : "bg-white shadow-md py-2"
          : isDark
          ? "bg-gray-900/95 py-3"
          : "bg-white/95 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${
            isDark ? "from-purple-400 via-pink-400 to-purple-400" : "from-purple-600 via-pink-600 to-purple-600"
          }`}
        >
          {t("navbar.name")}
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition ${
                  isActive
                    ? isDark
                      ? "bg-purple-700 text-white"
                      : "bg-purple-100 text-purple-700"
                    : isDark
                    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                    : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? t("navbar.switchLight") : t("navbar.switchDark")}
            className={`p-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* Language toggle */}
          <div className="flex gap-1">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-2 py-1 rounded text-sm font-medium ${
                i18n.language === "en"
                  ? isDark
                    ? "bg-purple-700 text-white"
                    : "bg-purple-100 text-purple-700"
                  : isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition`}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("fr")}
              className={`px-2 py-1 rounded text-sm font-medium ${
                i18n.language === "fr"
                  ? isDark
                    ? "bg-purple-700 text-white"
                    : "bg-purple-100 text-purple-700"
                  : isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition`}
            >
              FR
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-4 space-y-2`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full py-2 px-3 rounded-md text-base font-medium transition ${
                  isActive
                    ? isDark
                      ? "bg-purple-700 text-white"
                      : "bg-purple-100 text-purple-700"
                    : isDark
                    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                    : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
