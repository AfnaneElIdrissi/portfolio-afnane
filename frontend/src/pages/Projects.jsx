import React from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "projects.factFeed.title",
    description: "projects.factFeed.description",
    tech: ["React", "Laravel", "Tailwind CSS", "MySQL"],
    color: "from-blue-500 to-cyan-500",
    icon: "📰",
  },
  {
    title: "projects.portfolio.title",
    description: "projects.portfolio.description",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    color: "from-purple-500 to-pink-500",
    icon: "💼",
  },
  {
    title: "projects.clubManagement.title",
    description: "projects.clubManagement.description",
    tech: ["Laravel", "React", "Bootstrap", "phpMyAdmin"],
    color: "from-orange-500 to-red-500",
    icon: "🎯",
  },
];

const Projects = ({ isDark }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Background */}
      <div
        className={`fixed inset-0 -z-10 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
            : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        }`}
      ></div>

      {/* Glow */}
      <div className={`fixed inset-0 -z-10 ${isDark ? "opacity-20" : "opacity-10"}`}>
        <div
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse ${
            isDark ? "bg-purple-600" : "bg-purple-400"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse ${
            isDark ? "bg-pink-600" : "bg-pink-400"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <main className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Title */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark
                  ? "from-purple-400 via-pink-400 to-purple-400"
                  : "from-purple-600 via-pink-600 to-purple-600"
              }`}
            >
              {t("projects.title")}
            </span>
          </h1>

          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

          <p
            className={`mt-6 max-w-2xl mx-auto text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects grid */}
        <section className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition`}
              ></div>

              {/* Card */}
              <div
                className={`relative h-full rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 border backdrop-blur-2xl ${
                  isDark
                    ? "bg-gray-900/80 border-gray-800/50"
                    : "bg-white/80 border-gray-200"
                }`}
              >
                {/* Title */}
                <h2
                  className={`text-xl sm:text-2xl font-bold mb-3 transition ${
                    isDark
                      ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400"
                      : "text-gray-800 group-hover:text-purple-600"
                  }`}
                >
                  {t(project.title)}
                </h2>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base mb-6 leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {t(project.description)}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm border transition ${
                        isDark
                          ? "bg-gray-800/60 border-gray-700/50 text-gray-300 hover:text-white"
                          : "bg-gray-100 border-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`w-full mt-4 px-6 py-2.5 font-semibold rounded-xl bg-gradient-to-r ${project.color} text-white transition hover:scale-105 hover:shadow-lg`}
                >
                  {t("projects.button")}
                </button>

                {/* Decorative */}
                <div
                  className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-2xl`}
                ></div>
              </div>
            </article>
          ))}
        </section>
      </main>

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
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Projects;
