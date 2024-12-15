import React from "react";
import {
  FaCode,
  FaBuilding,
  FaFileAlt,
  FaGraduationCap,
  FaTerminal,
  FaEnvelope,
} from "react-icons/fa";
import DesktopIcon from "./DesktopIcon";
import { iconColors } from "../../utils/colors";

interface DesktopIconsProps {
  onIconClick: (window: string) => void;
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ onIconClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-8 mt-8">
      <DesktopIcon
        icon={<FaCode size={48} />}
        label="Skills"
        color={iconColors.desktop.code}
        onClick={() => onIconClick("skills")}
      />
      <DesktopIcon
        icon={<FaBuilding size={48} />}
        label="Experience"
        color={iconColors.desktop.experience}
        onClick={() => onIconClick("experience")}
      />
      <DesktopIcon
        icon={<FaGraduationCap size={48} />}
        label="Education"
        color={iconColors.desktop.education}
        onClick={() => onIconClick("education")}
      />
      <DesktopIcon
        icon={<FaFileAlt size={48} />}
        label="Resume.doc"
        color={iconColors.desktop.resume}
        onClick={() => onIconClick("resume")}
      />
      <DesktopIcon
        icon={<FaTerminal size={48} />}
        label="Terminal"
        color={iconColors.desktop.terminal}
        onClick={() => onIconClick("terminal")}
      />
      <DesktopIcon
        icon={<FaEnvelope size={48} />}
        label="Contact"
        color={iconColors.desktop.contact}
        onClick={() => onIconClick("contact")}
      />
    </div>
  );
};

export default DesktopIcons;
