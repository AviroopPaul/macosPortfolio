import React, { useState, useEffect, useRef } from "react";
import { FaApple, FaWifi, FaBatteryFull, FaVolumeUp } from "react-icons/fa";
import { Clock } from "./Clock";
import Window from "../Window/Window";
import AboutMac from "../AboutMac/AboutMac";
import BootScreen from "../BootScreen/BootScreen";

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(false);

  const menuItems = {
    apple: ["About This Mac", "Restart", "Shut Down"],
    file: ["New Window", "Open", "Save", "Export", "Print"],
    edit: ["Undo", "Redo", "Cut", "Copy", "Paste", "Select All"],
    view: ["Show Toolbar", "Enter Full Screen", "Show Status Bar"],
    window: ["Minimize", "Zoom", "Bring All to Front"],
    help: ["Portfolio Help", "Documentation", "Report an Issue"],
  };

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setActiveMenu(null);
    }
  };

  const handleMenuItemClick = (menu: string, item: string) => {
    if (menu === "apple") {
      if (item === "About This Mac") {
        setIsAboutOpen(true);
      } else if (item === "Restart") {
        setIsBooting(true);
      }
    }
    setActiveMenu(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isBooting && <BootScreen onBootComplete={() => setIsBooting(false)} />}
      <div
        ref={menuRef}
        className="fixed top-0 w-full h-8 bg-white/80 backdrop-blur-md text-black/90 flex items-center px-4 justify-between z-50 shadow-sm"
      >
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaApple
              size={18}
              className="text-black hover:text-white/80 transition-colors cursor-default"
              onClick={() => handleMenuClick("apple")}
            />
            {activeMenu === "apple" && (
              <div className="absolute top-8 left-0 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-1 min-w-[200px]">
                {menuItems.apple.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-default"
                    onClick={() => handleMenuItemClick("apple", item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="font-semibold">Portfolio</span>
          {["file", "edit", "view", "window", "help"].map((menu) => (
            <div key={menu} className="relative">
              <span
                className="hover:text-white/80 transition-colors cursor-default capitalize"
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </span>
              {activeMenu === menu && (
                <div className="absolute top-8 left-0 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-1 min-w-[200px]">
                  {menuItems[menu as keyof typeof menuItems].map((item) => (
                    <div
                      key={item}
                      className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-default"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <FaBatteryFull className="w-4 h-4" />
          <FaWifi className="w-4 h-4" />
          <FaVolumeUp className="w-4 h-4" />
          <Clock />
        </div>
      </div>

      <Window
        title="About This Mac"
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      >
        <AboutMac />
      </Window>
    </>
  );
};

export default MenuBar;
