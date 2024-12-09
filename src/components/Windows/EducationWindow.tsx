import React from 'react';
import Window from '../Window/Window';
import { FaCalendarAlt } from 'react-icons/fa';

interface EducationWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const EducationWindow: React.FC<EducationWindowProps> = ({ isOpen, onClose }) => {
  return (
    <Window title="Education" isOpen={isOpen} onClose={onClose}>
      <div className="flex h-full bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-700 p-4 bg-gray-800">
          <div className="flex items-center space-x-2 mb-6">
            <FaCalendarAlt className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-gray-200">Timeline</h2>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">2020 - 2024</div>
            <div className="text-sm text-gray-400">2018 - 2020</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="space-y-8">
            {/* University Education */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/1200px-KIIT_logo.svg.png" 
                      alt="University Logo" 
                      className="w-12 h-12 object-contain bg-white rounded-md p-1"
                    />
                    <h3 className="text-xl font-semibold text-gray-200">Kalinga Institute of Industrial Technology, Bhubaneswar</h3>
                  </div>
                  <p className="text-blue-400 font-medium mt-1">Bachelor of Technology in Computer Science</p>
                  <p className="text-gray-400 text-sm mt-1">2020 - 2024</p>
                </div>
              </div>
              <div className="mt-4 text-gray-300">
                <ul className="list-disc pl-5 space-y-2">
                  <li>CGPA: 9.34/10</li>
                  <li>Relevant Coursework: Data Structures, Algorithms, Web Development</li>
                </ul>
              </div>
            </div>

            {/* High School Education */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://www.dpsjhakri.com/images/dps_logo1.png" 
                      alt="School Logo" 
                      className="w-12 h-12 object-contain bg-white rounded-md p-1"
                    />
                    <h3 className="text-xl font-semibold text-gray-200">Delhi Public School, Ruby Park, Kolkata</h3>
                  </div>
                  <p className="text-blue-400 font-medium mt-1">High School Diploma</p>
                  <p className="text-gray-400 text-sm mt-1">2018 - 2020</p>
                </div>
              </div>
              <div className="mt-4 text-gray-300">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Grade: 94.2%</li>
                  <li>Science and Mathematics</li>
                  <li>School Vice Captain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default EducationWindow; 