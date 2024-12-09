import React from 'react';

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick?: () => void;
  className?: string;
}

const DockItem: React.FC<DockItemProps> = ({ icon, label, color, onClick, className }) => {
  return (
    <div className={`group relative flex flex-col items-center ${className}`} onClick={onClick}>
      <div 
        className="p-3 rounded-xl backdrop-blur-md transition-all duration-200 
                   cursor-pointer"
        style={{ 
          backgroundColor: `${color}15`,
          border: `1px solid ${color}30`
        }}
      >
        <div className="transform transition-transform" style={{ color }}>
          {icon}
        </div>
      </div>
      <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all duration-200 
                     bg-black/75 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default DockItem;