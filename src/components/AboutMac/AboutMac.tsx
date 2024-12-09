import React from 'react';
import { FaReact, FaNode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite } from 'react-icons/si';

const AboutMac = () => {
  const technologies = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Vite', icon: SiVite, color: 'text-purple-500' },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-between p-8 bg-gray-50">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-inner flex items-center justify-center">
          <span className="text-6xl">🖥️</span>
        </div>
        <h1 className="text-3xl font-medium mb-2">Portfolio OS</h1>
        <p className="text-gray-500">Version 1.0</p>
      </div>

      {/* System Info */}
      <div className="w-full max-w-xl bg-white rounded-lg p-8 shadow-inner">
        <h2 className="text-xl font-medium mb-6 text-center">Built with</h2>
        <div className="grid grid-cols-2 gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center space-x-4">
              <tech.icon className={`text-3xl ${tech.color}`} />
              <span className="text-gray-700 text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* System Report Button */}
      <div className="mt-8">
        <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm transition-colors">
          System Report...
        </button>
      </div>
    </div>
  );
};

export default AboutMac; 