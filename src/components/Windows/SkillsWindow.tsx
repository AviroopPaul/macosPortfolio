import React from 'react';
import Window from '../Window/Window';

interface SkillsWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsWindow: React.FC<SkillsWindowProps> = ({ isOpen, onClose }) => {
  return (
    <Window title="Skills.txt" isOpen={isOpen} onClose={onClose}>
      <div className="p-6 font-mono text-sm">
        <h2 className="text-lg font-bold mb-4">Frontend Skills</h2>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>React.js / Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>HTML5 / CSS3</li>
          <li>Redux / Context API</li>
          <li>Responsive Design</li>
        </ul>

        <h2 className="text-lg font-bold mb-4">Backend Skills</h2>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Node.js / Express</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
          <li>Authentication / Authorization</li>
          <li>Microservices Architecture</li>
        </ul>

        <h2 className="text-lg font-bold mb-4">Database Skills</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>Database Design</li>
          <li>Query Optimization</li>
        </ul>
      </div>
    </Window>
  );
}

export default SkillsWindow;