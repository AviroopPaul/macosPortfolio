import React from 'react';
import Window from '../Window/Window';
import { FaCalendarAlt } from 'react-icons/fa';
import nokiaLogo from '/path/to/nokia-logo.png';

interface ExperienceWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceWindow: React.FC<ExperienceWindowProps> = ({ isOpen, onClose }) => {
  return (
    <Window title="Experience" isOpen={isOpen} onClose={onClose}>
      <div className="flex h-full bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-700 p-4 bg-gray-800">
          <div className="flex items-center space-x-2 mb-6">
            <FaCalendarAlt className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-gray-200">Work Timeline</h2>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">2024 - Present</div>
            <div className="text-sm text-gray-400">2023 - 2024</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="space-y-8">
            {/* Think41 Experience */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D560BAQGsC2cDNe68Pw/company-logo_200_200/company-logo_200_200/0/1718175225079/think41_logo?e=2147483647&v=beta&t=bqhY8WjuoC4u_z_fLllhB40W4nBXiRKMCfWaeX8UQNc" 
                      alt="Think41 Logo" 
                      className="w-12 h-12 object-contain bg-white rounded-md p-1"
                    />
                    <h3 className="text-xl font-semibold text-gray-200">Think41</h3>
                  </div>
                  <p className="text-blue-400 font-medium mt-1">Software Development Engineer 1</p>
                  <p className="text-gray-400 text-sm mt-1">July 2023 - Present</p>
                </div>
              </div>
              <div className="mt-4 text-gray-300">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Led development of key features in React.js and Node.js</li>
                  <li>Implemented microservices architecture for scalable solutions</li>
                  <li>Optimized database queries improving performance by 40%</li>
                </ul>
              </div>
            </div>

            {/* Nokia Networks Experience */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wrM2-YuHU_VCgYOuWmgeS_ncXHN3l4Ad3g&s"} 
                      alt="Nokia Logo" 
                      className="w-14 h-14 object-contain bg-white rounded-md p-1"
                    />
                    <h3 className="text-xl font-semibold text-gray-200">Nokia Networks</h3>
                  </div>
                  <p className="text-blue-400 font-medium mt-1">Software Engineering Intern</p>
                  <p className="text-gray-400 text-sm mt-1">Aug 2023 - June 2024</p>
                </div>
              </div>
              <div className="mt-4 text-gray-300">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed and maintained network management applications</li>
                  <li>Collaborated with senior engineers on system architecture</li>
                  <li>Implemented automated testing reducing bug detection time by 60%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default ExperienceWindow;