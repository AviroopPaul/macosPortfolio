import React from "react";
import Window from "../Window/Window";
import { HiOutlineSparkles } from "react-icons/hi";

interface WelcomeWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeWindow: React.FC<WelcomeWindowProps> = ({ isOpen, onClose }) => {
  return (
    <Window
      title="Welcome"
      isOpen={isOpen}
      onClose={onClose}
      defaultPosition={{ x: window.innerWidth / 2 - 300, y: window.innerHeight / 2 - 250 }}
      defaultSize={{ width: 600, height: 500 }}
    >
      <div className="relative h-full overflow-hidden">
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/path/to/poster-image.jpg"
            className="absolute w-full h-full object-cover"
          >
            <source 
              src="https://res.cloudinary.com/dami7wcek/video/upload/v1734286390/7234993-uhd_3840_2160_30fps_z4doem.mp4" 
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full overflow-y-auto">
          <div className="flex flex-col items-center space-y-8 text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to my Portfolio OS
            </h1>
            
            <div className="p-6 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-300/20">
              <HiOutlineSparkles className="w-20 h-20 text-blue-300 animate-pulse" />
            </div>
            
            <p className="text-xl text-gray-100 max-w-md text-center leading-relaxed">
              This is an interactive macOS-inspired portfolio. Feel free to explore and interact with different applications!
            </p>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl w-full max-w-md border border-white/20">
              <h2 className="font-semibold mb-6 text-2xl">Quick Guide:</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-lg">
                  <span className="text-blue-300">•</span>
                  <span>Click on desktop icons to open different sections</span>
                </li>
                <li className="flex items-center space-x-3 text-lg">
                  <span className="text-blue-300">•</span>
                  <span>Use the dock at the bottom for quick access</span>
                </li>
                <li className="flex items-center space-x-3 text-lg">
                  <span className="text-blue-300">•</span>
                  <span>Check out the menu bar for additional options</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-4 bg-white/10 text-white text-lg
                         rounded-xl hover:bg-white/20
                         transition-all duration-300 hover:scale-105 active:scale-95 font-medium
                         shadow-lg hover:shadow-white/25 backdrop-blur-md
                         border border-white/20"
            >
              Get Started
            </button>

            <div className="text-sm text-gray-300/80 pt-4 text-center">
              <p>Built with ❤️ by Aviroop</p>
              <p className="text-xs mt-1">v1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default WelcomeWindow; 