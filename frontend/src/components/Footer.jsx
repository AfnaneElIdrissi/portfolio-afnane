import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="hover:scale-110 transition-transform duration-300 hover:text-cyan-500"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="hover:scale-110 transition-transform duration-300 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          {/* Email → link to contact page */}
          <Link
            to="/contact"
            title="Contact Me"
            className="hover:scale-110 transition-transform duration-300 hover:text-emerald-500"
          >
            <FaEnvelope />
          </Link>

          {/* Instagram → link to contact page */}
          <Link
            to="/contact"
            title="Instagram / Contact"
            className="hover:scale-110 transition-transform duration-300 hover:text-pink-500"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* Optional: small note */}
        <p className="text-xs opacity-50 mt-2">
          Connect with me or send me a message via the contact page!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
