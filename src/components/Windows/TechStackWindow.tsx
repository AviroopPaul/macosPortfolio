import React from 'react';
import Window from '../Window/Window';
import { FaSearch } from 'react-icons/fa';

interface TechStackWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const techStack = [
  {
    name: 'React',
    category: 'Frontend',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Python',
    category: 'Backend',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'MongoDB',
    category: 'Database',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
  },
];

const TechStackWindow: React.FC<TechStackWindowProps> = ({ isOpen, onClose }) => {
  return (
    <Window title="Tech Stack Gallery" isOpen={isOpen} onClose={onClose}>
      <div className="flex h-full bg-gray-900">
        {/* Sidebar */}
        <div className="w-48 bg-gray-800 p-4 border-r border-gray-700">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 pr-4 py-1 rounded-md border border-gray-600 bg-gray-700 text-gray-100 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
            <FaSearch className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-700 text-sm font-medium text-gray-100">
              All Technologies
            </button>
            <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-700 text-sm text-gray-300">
              Frontend
            </button>
            <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-700 text-sm text-gray-300">
              Backend
            </button>
            <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-700 text-sm text-gray-300">
              Database
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="group relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-800 p-6 shadow-sm 
                              hover:shadow-md transition-shadow duration-200 border border-gray-700">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium text-gray-100">{tech.name}</h3>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
};

export default TechStackWindow;