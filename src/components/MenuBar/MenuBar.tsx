import React, { useState, useEffect, useRef } from "react";
import {
  FaApple,
  FaWifi,
  FaBatteryFull,
  FaVolumeUp,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaCircle,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";
import { Clock } from "./Clock";
import Window from "../Window/Window";
import AboutMac from "../AboutMac/AboutMac";
import BootScreen from "../BootScreen/BootScreen";

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const batteryRef = useRef<HTMLDivElement | null>(null);
  const wifiRef = useRef<HTMLDivElement | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [wifiStrength, setWifiStrength] = useState(3); // 0-4 scale
  const [showBatteryMenu, setShowBatteryMenu] = useState(false);
  const [showWifiMenu, setShowWifiMenu] = useState(false);
  const [showVolumeMenu, setShowVolumeMenu] = useState(false);
  const [volume, setVolume] = useState(75);
  const volumeRef = useRef<HTMLDivElement | null>(null);

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
    if (
      batteryRef.current &&
      !batteryRef.current.contains(event.target as Node)
    ) {
      setShowBatteryMenu(false);
    }
    if (wifiRef.current && !wifiRef.current.contains(event.target as Node)) {
      setShowWifiMenu(false);
    }
    if (volumeRef.current && !volumeRef.current.contains(event.target as Node)) {
      setShowVolumeMenu(false);
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

  const getBatteryIcon = () => {
    if (batteryLevel > 70) return <FaBatteryFull className="w-4 h-4" />;
    if (batteryLevel > 30) return <FaBatteryHalf className="w-4 h-4" />;
    return <FaBatteryQuarter className="w-4 h-4 text-red-500" />;
  };

  const getVolumeIcon = () => {
    if (volume > 50) return <FaVolumeUp className="w-4 h-4" />;
    if (volume > 0) return <FaVolumeDown className="w-4 h-4" />;
    return <FaVolumeMute className="w-4 h-4" />;
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
        className="w-full h-8 bg-gray-600/20 backdrop-blur-lg text-white/100 flex items-center px-4 justify-between z-50 shadow-sm"
      >
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaApple
              size={18}
              className="text-white hover:text-white/80 transition-colors cursor-default"
              onClick={() => handleMenuClick("apple")}
            />
            {activeMenu === "apple" && (
              <div className="absolute top-8 left-0 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-1 min-w-[200px]">
                {menuItems.apple.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-1 text-black hover:bg-blue-500 hover:text-white cursor-default"
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
                      className="px-4 py-1 text-black hover:bg-blue-500 hover:text-white cursor-default"
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
          <div className="relative" ref={batteryRef}>
            <div
              className="cursor-default flex items-center gap-1"
              onClick={() => {
                setShowBatteryMenu(!showBatteryMenu);
                setShowWifiMenu(false); // Close WiFi menu if open
              }}
            >
              <span className="text-sm">{batteryLevel}%</span>
              {getBatteryIcon()}
            </div>
            {showBatteryMenu && (
              <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-2 px-4 min-w-[200px]">
                <div className="text-sm">
                  <div className="flex items-center gap-2">
                    <FaCircle className="text-green-500 w-3 h-3" />
                    <div className="font-semibold text-black">Battery</div>
                  </div>
                  <div className="text-black">{batteryLevel}% remaining</div>
                  <div className="text-black">Using battery power</div>
                  <div className="text-black text-xs mt-2">
                    Apps Using Significant Energy:
                  </div>
                  <div className="text-xs text-black">Chrome (as always 😅)</div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={wifiRef}>
            <div
              className="cursor-default"
              onClick={() => {
                setShowWifiMenu(!showWifiMenu);
                setShowBatteryMenu(false); // Close Battery menu if open
              }}
            >
              <FaWifi
                className={`w-4 h-4 ${wifiStrength < 2 ? "text-gray-400" : ""}`}
              />
            </div>
            {showWifiMenu && (
              <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-2 px-4 min-w-[200px]">
                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaWifi className="w-4 h-4 text-black" />
                      <div className="font-semibold text-black">Wi-Fi</div>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </div>
                  </div>
                  <div className="text-black">Connected to: Developer's Coffee Shop</div>
                  <div className="text-black">
                    Signal Strength: {wifiStrength}/4
                  </div>
                  <div className="text-xs mt-2 text-black">IP Address: 192.168.1.???</div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={volumeRef}>
            <div
              className="cursor-default"
              onClick={() => {
                setShowVolumeMenu(!showVolumeMenu);
                setShowBatteryMenu(false);
                setShowWifiMenu(false);
              }}
            >
              {getVolumeIcon()}
            </div>
            {showVolumeMenu && (
              <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-2 px-4 min-w-[200px]">
                <div className="text-sm">
                  <div className="flex items-center gap-2 text-black">
                    {getVolumeIcon()}
                    <div className="font-semibold text-black">Sound</div>
                  </div>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(parseInt(e.target.value))}
                      className="w-full h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                  </div>
                  <div className="text-black mt-1">Volume: {volume}%</div>
                  <div className="mt-2 text-xs text-black">
                    Output Device: MacBook Pro Speakers
                  </div>
                </div>
              </div>
            )}
          </div>

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
