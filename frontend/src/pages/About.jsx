import React from "react";
import { useTranslation } from "react-i18next";

const About = ({ isDark }) => {
  const { t } = useTranslation();

  const skills = [
    { name: "HTML5", color: "from-orange-500 to-red-500", category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", color: "from-blue-500 to-cyan-500", category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", color: "from-yellow-500 to-orange-500", category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", color: "from-cyan-400 to-blue-500", category: "Frontend", url: "https://react.dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500", category: "Frontend", url: "https://tailwindcss.com", icon: "https://logo.svgcdn.com/devicon/tailwindcss-original.svg" },
    { name: "Bootstrap", color: "from-purple-500 to-indigo-500", category: "Frontend", url: "https://getbootstrap.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
    { name: "Laravel", color: "from-red-500 to-pink-500", category: "Backend", url: "https://laravel.com", icon: "https://logo.svgcdn.com/devicon/laravel-original.svg" },
    { name: "PHP", color: "from-indigo-500 to-purple-500", category: "Backend", url: "https://www.php.net", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "phpMyAdmin", color: "from-orange-400 to-amber-500", category: "Database", url: "https://www.phpmyadmin.net", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${isDark ? "bg-black" : "bg-gray-50"}`}>
      {/* Background Glow */}
      <div className={`fixed inset-0 -z-10 ${isDark ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`}></div>
      <div className={`fixed inset-0 -z-10 ${isDark ? "opacity-20" : "opacity-10"}`}>
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse ${isDark ? "bg-purple-600" : "bg-purple-400"}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse ${isDark ? "bg-pink-600" : "bg-pink-400"}`} style={{ animationDelay: "1s" }}></div>
      </div>

      <main className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <section className="max-w-6xl w-full mx-auto">
          {/* Title */}
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? "from-purple-400 via-pink-400 to-purple-400" : "from-purple-600 via-pink-600 to-purple-600"}`}>
                {t("about.title")}
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Card */}
          <div className="relative group animate-fadeInUp">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
            <div className={`relative backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border transition-colors ${isDark ? "bg-gray-900/80 border-gray-800/50" : "bg-white/80 border-gray-200"}`}>
              {/* Text */}
              <div className="space-y-6 mb-12">
                <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-lg`}>{t("about.p1")}</p>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg`}>{t("about.p2")}</p>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg`}>{t("about.p3")}</p>
              </div>

              {/* Skills */}
              <h2 className={`text-2xl font-semibold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>
                {t("about.skillsTitle")}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex items-center gap-2 rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border ${isDark ? "bg-gray-800/60 border-gray-700 text-gray-300 hover:text-white" : "bg-white border-gray-200 text-gray-700 hover:text-purple-600 shadow"}`}
                    style={{ animation: "fadeInUp 0.6s ease-out forwards", animationDelay: `${index * 50}ms`, opacity: 0 }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                    <span className="text-sm font-semibold flex justify-between items-center w-full">
                      {skill.name} <span className="text-xs opacity-70">{skill.category}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
        `}
      </style>
    </div>
  );
};

export default About;
