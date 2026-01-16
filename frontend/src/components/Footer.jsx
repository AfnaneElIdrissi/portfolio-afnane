import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = ({ isDark }) => {
  return (
    <footer
      className={`w-full mt-20 py-6 transition-all duration-500
      ${isDark ? "bg-black text-gray-300" : "bg-gray-100 text-gray-700"}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">

        {/* Name */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Afnane El Idrissi Salmi
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform duration-300 hover:text-cyan-500"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform duration-300 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:scale-110 transition-transform duration-300 hover:text-emerald-500"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
