import React from 'react';

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick?: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, color, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer 
                 transition-all duration-200 group"
      onClick={onClick}
    >
      <div className="mb-1 transform transition-transform group-hover:scale-110" style={{ color }}>
        {icon}
      </div>
      <span className="text-white/90 text-sm text-center break-words font-medium 
                     drop-shadow-lg group-hover:text-white">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;