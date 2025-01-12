import React, { useEffect, useState } from "react";

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose }) => {
  const [position, setPosition] = useState({ x, y });

  useEffect(() => {
    // Adjust position if menu would go off screen
    const menuElement = document.getElementById("context-menu");
    if (menuElement) {
      const menuRect = menuElement.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let adjustedX = x;
      let adjustedY = y;

      if (x + menuRect.width > windowWidth) {
        adjustedX = windowWidth - menuRect.width - 10;
      }
      if (y + menuRect.height > windowHeight) {
        adjustedY = windowHeight - menuRect.height - 10;
      }

      setPosition({ x: adjustedX, y: adjustedY });
    }
  }, [x, y]);

  const menuItems = [
    { label: "New Folder", disabled: true },
    { label: "Get Info", disabled: true },
    null, // separator
    { label: "Change Desktop Background...", disabled: true },
    null, // separator
    { label: "Use Stacks", disabled: true },
    { label: "Sort By", disabled: true },
    { label: "Clean Up", disabled: true },
    null, // separator
    { label: "Show View Options", disabled: true },
  ];

  return (
    <>
      <div className="fixed inset-0 z-[999]" onClick={onClose} />
      <div
        id="context-menu"
        className="fixed z-[1000] bg-white/90 backdrop-blur-md rounded-lg shadow-lg py-1 min-w-[220px] dark:bg-gray-800/90 context-menu-appear"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div className="px-4 py-1 text-xs text-gray-500 italic">Coming soon...</div>
        {menuItems.map((item, index) =>
          item === null ? (
            <div
              key={`separator-${index}`}
              className="h-[1px] my-1 bg-gray-200 dark:bg-gray-700"
            />
          ) : (
            <button
              key={item.label}
              className={`w-full px-4 py-1 text-left text-sm ${
                item.disabled
                  ? "text-gray-400 cursor-default"
                  : "text-black dark:text-white hover:bg-blue-500 hover:text-white"
              }`}
              disabled={item.disabled}
            >
              {item.label}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default ContextMenu;
