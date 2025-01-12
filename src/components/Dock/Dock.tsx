import React from "react";
import {
  FaCode,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaBook,
  FaBuilding,
  FaImage,
  FaTerminal,
  FaSafari,
} from "react-icons/fa";
import DockItem from "./DockItem";
import { iconColors } from "../../utils/colors";

interface DockProps {
  onItemClick: (window: string) => void;
}

const Dock: React.FC<DockProps> = ({ onItemClick }) => {
  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl 
                    bg-white/5 backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center space-x-6 h-16">
        <DockItem
          className="dock-item"
          icon={<FaCode size={40} />}
          label="Projects"
          color={iconColors.projects}
          onClick={() => onItemClick("github")}
        />
        <DockItem
          className="dock-item"
          icon={<FaBook size={40} />}
          label="Skills"
          color={iconColors.skills}
          onClick={() => onItemClick("skills")}
        />
        <DockItem
          className="dock-item"
          icon={<FaBuilding size={40} />}
          label="Experience"
          color={iconColors.experience}
          onClick={() => onItemClick("experience")}
        />
        <DockItem
          className="dock-item"
          icon={<FaSafari size={40} />}
          label="Safari"
          color={iconColors.desktop.safari}
          onClick={() => onItemClick("safari")}
        />
        <DockItem
          className="dock-item"
          icon={<FaImage size={40} />}
          label="Tech Stack"
          color={iconColors.techStack}
          onClick={() => onItemClick("techStack")}
        />
        <DockItem
          className="dock-item"
          icon={<FaTerminal size={24} />}
          label="Terminal"
          color={iconColors.desktop.terminal}
          onClick={() => onItemClick("terminal")}
        />
        <div className="w-px h-full bg-white/10 mx-2" />
        <DockItem
          className="dock-item"
          icon={<FaGithub size={40} />}
          label="GitHub"
          color={iconColors.github}
          onClick={() => onItemClick("github")}
        />
        <DockItem
          className="dock-item"
          icon={<FaLinkedin size={40} />}
          label="LinkedIn"
          color={iconColors.linkedin}
          onClick={() => onItemClick("linkedin")}
        />
        <DockItem
          className="dock-item"
          icon={<FaEnvelope size={40} />}
          label="Contact"
          color={iconColors.contact}
          onClick={() => onItemClick("contact")}
        />
      </div>
    </div>
  );
};

export default Dock;
