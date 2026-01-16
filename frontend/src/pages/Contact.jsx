import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your email/send logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/AfnaneElIdrissi",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/afnane-el-idrissi-3658b929a/",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:elidrissiafnane@gmail.com",
      color: "from-red-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Animated background */}
      <div
        className={`fixed inset-0 -z-10 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
            : "bg-gradient-to-br from-gray-100 via-white to-gray-200"
        }`}
      ></div>

      <main className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-5xl">
          {/* Title */}
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Get In Touch
              </span>
            </h1>
            <div className="h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <p
              className={`mt-6 max-w-xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Have a project in mind or want to collaborate? I’d love to hear
              from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div
                className={`relative rounded-3xl p-8 border backdrop-blur-xl transition-colors ${
                  isDark ? "bg-gray-900/80 border-gray-800" : "bg-white border-gray-200"
                }`}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, name: true })}
                    onBlur={() => setFocused({ ...focused, name: false })}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors ${
                      isDark
                        ? focused.name
                          ? "border-purple-500 bg-gray-800 text-white"
                          : "border-gray-700 bg-gray-800 text-white"
                        : focused.name
                        ? "border-purple-500 bg-white text-gray-900"
                        : "border-gray-300 bg-white text-gray-900"
                    }`}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, email: true })}
                    onBlur={() => setFocused({ ...focused, email: false })}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors ${
                      isDark
                        ? focused.email
                          ? "border-purple-500 bg-gray-800 text-white"
                          : "border-gray-700 bg-gray-800 text-white"
                        : focused.email
                        ? "border-purple-500 bg-white text-gray-900"
                        : "border-gray-300 bg-white text-gray-900"
                    }`}
                    required
                  />

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, message: true })}
                    onBlur={() => setFocused({ ...focused, message: false })}
                    className={`w-full px-4 py-3 rounded-xl border resize-none focus:outline-none transition-colors ${
                      isDark
                        ? focused.message
                          ? "border-purple-500 bg-gray-800 text-white"
                          : "border-gray-700 bg-gray-800 text-white"
                        : focused.message
                        ? "border-purple-500 bg-white text-gray-900"
                        : "border-gray-300 bg-white text-gray-900"
                    }`}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition"
                  >
                    Send Message 
                  </button>
                </form>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h2
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Let’s Connect
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-5 rounded-2xl border transition-transform hover:scale-105 ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 hover:opacity-20 transition-opacity`}
                    />
                    <div className="relative z-10 text-3xl mb-2">{social.icon}</div>
                    <span
                      className={`relative z-10 font-medium ${
                        isDark ? "text-gray-300" : "text-gray-900"
                      }`}
                    >
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              <p className={`${isDark ? "text-gray-400" : "text-gray-700"} text-sm`}>
                I usually reply within{" "}
                <span className="text-purple-400 font-semibold">24 hours</span>.
              </p>
            </div>
          </div>
        </div>
      </main>

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

export default Contact;