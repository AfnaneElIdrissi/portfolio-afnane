import React from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "projects.factFeed.title",
    description: "projects.factFeed.description",
    tech: ["React", "Laravel", "Tailwind CSS", "MySQL"],
    color: "from-blue-500 to-cyan-500",
    future: false,
  },
  {
    title: "projects.portfolio.title",
    description: "projects.portfolio.description",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    color: "from-purple-500 to-pink-500",
    future: false,
  },
  {
    title: "projects.restaurantManager.title",
    description: "projects.restaurantManager.description",
    tech: ["Laravel", "React", "Bootstrap", "phpMyAdmin"],
    color: "from-orange-500 to-red-500",
    future: true, // projet futur
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
                className={`relative h-96 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 border backdrop-blur-2xl flex flex-col ${
                  isDark
                    ? "bg-gray-900/80 border-gray-800/50"
                    : "bg-white/80 border-gray-200"
                }`}
              >
                {/* Title */}
                <div className="flex items-center mb-3">
                  <h2
                    className={`text-xl sm:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300 ${
                      isDark
                        ? "from-white via-white to-white group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-purple-400"
                        : "from-gray-800 via-gray-800 to-gray-800 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-purple-500"
                    }`}
                  >
                    {t(project.title)}
                  </h2>
                  {project.future && (
                    <span className="ml-2 px-2 py-1 text-xs rounded-full bg-yellow-400 text-white">
                      {t("projects.future")}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base mb-4 leading-relaxed flex-grow ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {t(project.description)}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
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
      <style>{`
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
