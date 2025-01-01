import React from "react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInApp: React.FC = () => {
  return (
    <div className="h-screen pb-16 bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <FaLinkedin className="text-5xl" />
        </div>
        <a
          href="https://linkedin.com/in/aviroop-paul"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
        >
          <FaLinkedin className="text-xl" />
          Open on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default LinkedInApp;
