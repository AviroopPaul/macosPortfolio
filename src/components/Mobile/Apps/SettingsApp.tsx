import React from "react";
import { IoChevronForward } from "react-icons/io5";
import {
  FaUser,
  FaEnvelope,
  FaCode,
  FaInfo,
  FaReact,
  FaCss3,
  FaIcons,
  FaTools,
} from "react-icons/fa";

const SettingsApp: React.FC = () => {
  const profileImageUrl =
    "https://res.cloudinary.com/dami7wcek/image/upload/v1735470175/note-app/wtltbu55bsaehyst1dvv.png";

  return (
    <div className="min-h-screen bg-[#f2f2f7] dark:bg-black">
      {/* Header */}
      <div className="bg-[#f2f2f7] dark:bg-black px-4 py-6">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Settings
        </h1>
      </div>

      <div className="space-y-8">
        {/* Profile Section */}
        <div className="bg-white dark:bg-[#1c1c1e] mx-4 rounded-xl overflow-hidden">
          <div className="p-4 flex items-center space-x-4">
            <img
              src={profileImageUrl}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <FaUser className="text-blue-500" size={18} />
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  Aviroop Paul
                </h2>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <FaEnvelope className="text-red-500" size={18} />
                <p className="text-gray-500 dark:text-gray-400">
                  apavirooppaul10@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Settings Groups */}
        <div className="space-y-8">
          {/* About Section */}
          <div className="bg-white dark:bg-[#1c1c1e] mx-4 rounded-xl">
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <FaInfo className="text-purple-500" size={18} />
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  About Me
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Full-stack developer with a passion for creating elegant
                solutions to complex problems. Experienced in building modern
                web applications with a focus on user experience and
                performance.
              </p>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-white dark:bg-[#1c1c1e] mx-4 rounded-xl">
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              <div className="px-4 py-3">
                <div className="flex items-center space-x-2">
                  <FaCode className="text-green-500" size={18} />
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    Built with
                  </h3>
                </div>
              </div>
              {[
                {
                  name: "Next.js with TypeScript",
                  icon: <FaReact className="text-blue-400" size={18} />,
                },
                {
                  name: "Tailwind CSS",
                  icon: <FaCss3 className="text-cyan-500" size={18} />,
                },
                {
                  name: "React Icons",
                  icon: <FaIcons className="text-yellow-500" size={18} />,
                },
                {
                  name: "Vite",
                  icon: <FaTools className="text-orange-500" size={18} />,
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <div className="flex items-center space-x-2">
                    <span>{tech.icon}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {tech.name}
                    </span>
                  </div>
                  <IoChevronForward className="text-gray-400 text-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm py-4">
          Version 1.0.0
        </div>
      </div>
    </div>
  );
};

export default SettingsApp;
