import React from "react";
import Window from "../Window/Window";

interface LinkedInWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const LinkedInWindow: React.FC<LinkedInWindowProps> = ({ isOpen, onClose }) => {
  return (
    <Window title="LinkedIn Profile" isOpen={isOpen} onClose={onClose}>
      {/* Browser Address Bar */}
      <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center gap-2">
        {/* Security Icon */}
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        {/* URL Bar */}
        <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
          linkedin.com/in/avirooppaul
        </div>
        {/* Refresh Button */}
        <button className="p-1 hover:bg-gray-200 rounded">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div className="relative h-full">
        {/* LinkedIn Profile Screenshot */}
        <img 
          src="/images/linkedin-profile.png" // Add your LinkedIn profile screenshot here
          alt="LinkedIn Profile Preview"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with Button */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/avirooppaul"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Open on LinkedIn
          </a>
        </div>
      </div>
    </Window>
  );
};

export default LinkedInWindow;
