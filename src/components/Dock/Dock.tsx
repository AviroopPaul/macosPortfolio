import React from 'react';
import { 
  FaCode, 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin,
  FaBook,
  FaBuilding,
  FaImage
} from 'react-icons/fa';
import DockItem from './DockItem';
import { iconColors } from '../../utils/colors';

interface DockProps {
  onItemClick: (window: string) => void;
}

const Dock: React.FC<DockProps> = ({ onItemClick }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl 
                    bg-white/5 backdrop-blur-md border border-white/10">
      <div className="flex space-x-4">
        <DockItem 
          className="transform transition-transform duration-200 hover:scale-125"
          icon={<FaCode size={40} />} 
          label="Projects" 
          color={iconColors.projects}
          onClick={() => onItemClick('github')}
        />
        <DockItem 
          className="transform transition-transform duration-200 hover:scale-125"
          icon={<FaBook size={40} />} 
          label="Skills" 
          color={iconColors.skills}
          onClick={() => onItemClick('skills')}
        />
        <DockItem 
          className="transform transition-transform duration-200 hover:scale-125"
          icon={<FaBuilding size={40} />} 
          label="Experience" 
          color={iconColors.experience}
          onClick={() => onItemClick('experience')} 
        />
        <DockItem 
          className="transform transition-transform duration-200 hover:scale-125"
          icon={<FaImage size={40} />} 
          label="Tech Stack" 
          color={iconColors.techStack}
          onClick={() => onItemClick('techStack')} 
        />
        <div className="w-px h-10 bg-white/10 mx-2" />
        <DockItem 
          className="transform transition-transform duration-200 hover:scale-125"
          icon={<FaGithub size={40} />} 
          label="GitHub" 
          color={iconColors.github}
          onClick={() => onItemClick('github')}
        />
        <DockItem 
          className="transform transition-transform duration-200 hover:scale-125"
          icon={<FaLinkedin size={40} />} 
          label="LinkedIn" 
          color={iconColors.linkedin}
          onClick={() => onItemClick('linkedin')}
        />
        <DockItem 
          className="transform transition-transform duration-200 hover:scale-125"
          icon={<FaEnvelope size={40} />} 
          label="Contact" 
          color={iconColors.contact}
          onClick={() => onItemClick('contact')}
        />
      </div>
    </div>
  );
};

export default Dock;