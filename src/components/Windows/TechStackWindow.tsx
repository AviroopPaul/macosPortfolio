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
  {
    name: 'Redis',
    category: 'Database',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg'
  }
];

const TechStackWindow: React.FC<TechStackWindowProps> = ({ isOpen, onClose }) => {
  return (
    <Window title="Tech Stack Gallery" isOpen={isOpen} onClose={onClose}>
      <div className="flex h-full bg-gray-50">
        {/* Sidebar */}
        <div className="w-48 bg-gray-100 p-4 border-r border-gray-200">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-200 text-sm font-medium">
              All Technologies
            </button>
            <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-200 text-sm">
              Frontend
            </button>
            <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-200 text-sm">
              Backend
            </button>
            <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-200 text-sm">
              Database
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="group relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-white p-6 shadow-sm 
                              hover:shadow-md transition-shadow duration-200 border border-gray-200">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium text-gray-900">{tech.name}</h3>
                  <p className="text-xs text-gray-500">{tech.category}</p>
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