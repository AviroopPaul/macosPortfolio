import React from 'react';
import { 
  FaCode, 
  FaGithub, 
  FaChrome, 
  FaBuilding, 
  FaImage,
  FaFileAlt
} from 'react-icons/fa';
import DesktopIcon from './DesktopIcon';
import { iconColors } from '../../utils/colors';

interface DesktopIconsProps {
  onIconClick: (window: string) => void;
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ onIconClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-8 mt-8">
      <DesktopIcon 
        icon={<FaCode size={48} />} 
        label="portfolio.code" 
        color={iconColors.desktop.code}
        onClick={() => onIconClick('skills')}
      />
      <DesktopIcon 
        icon={<FaGithub size={48} />} 
        label="Projects" 
        color={iconColors.desktop.projects}
        onClick={() => onIconClick('github')}
      />
      <DesktopIcon 
        icon={<FaBuilding size={48} />} 
        label="Experience" 
        color={iconColors.desktop.experience}
        onClick={() => onIconClick('experience')}
      />
      <DesktopIcon 
        icon={<FaImage size={48} />} 
        label="Tech Stack" 
        color={iconColors.desktop.techStack}
        onClick={() => onIconClick('techStack')}
      />
      <DesktopIcon 
        icon={<FaFileAlt size={48} />} 
        label="Resume.doc" 
        color={iconColors.desktop.resume}
        onClick={() => onIconClick('resume')}
      />
    </div>
  );
};

export default DesktopIcons;