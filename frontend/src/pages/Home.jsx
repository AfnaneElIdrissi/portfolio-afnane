import React from "react";
import { Link } from "react-router-dom";
import myPic from "../assets/afnane.png";
import { useTranslation } from "react-i18next";

function Home({ isDark }) {
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Background gradient */}
      <div
        className={`fixed inset-0 -z-10 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
            : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        }`}
      ></div>

      {/* Glow effects */}
      <div className={`fixed inset-0 -z-10 ${isDark ? "opacity-20" : "opacity-10"}`}>
        <div
          className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse ${
            isDark ? "bg-purple-600" : "bg-purple-400"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse ${
            isDark ? "bg-pink-600" : "bg-pink-400"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 py-20">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 animate-fadeIn">
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${
              isDark
                ? "from-purple-400 via-pink-400 to-purple-400"
                : "from-purple-600 via-pink-600 to-purple-600"
            }`}
          >
            {t("home.welcome")}
          </span>
        </h1>

        {/* Your Picture */}
        <img
          src={myPic}
          alt={t("navbar.name")}
          className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-purple-500 shadow-lg animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        />

        {/* Subtitle */}
        <p
          className={`max-w-2xl text-lg mb-8 animate-fadeInUp ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {t("home.subtitle")}
        </p>

        {/* Tech stack */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          {[ 
            { name: "React", link: "https://react.dev" },
            { name: "Laravel", link: "https://laravel.com" },
            { name: "Tailwind CSS", link: "https://tailwindcss.com" },
            { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
          ].map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-full text-sm transition-all hover:scale-105 ${
                isDark
                  ? "bg-gray-800/60 border border-gray-700 text-gray-300 hover:text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:text-purple-600 shadow"
              }`}
            >
              {tech.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          <Link
            to="/projects"
            className={`px-8 py-3 rounded-full border-2 font-semibold transition hover:scale-105 ${
              isDark
                ? "border-purple-500 text-white hover:bg-purple-500"
                : "border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white"
            }`}
          >
            {t("home.projectsButton")}
          </Link>

          <Link
            to="/contact"
            className={`px-8 py-3 rounded-full border-2 font-semibold transition hover:scale-105 ${
              isDark
                ? "border-pink-500 text-white hover:bg-pink-500"
                : "border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
            }`}
          >
            {t("home.contactButton")}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce opacity-60">
          <svg
            className={`w-6 h-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
}

export default Home;
