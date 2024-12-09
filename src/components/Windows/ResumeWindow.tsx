import React from "react";
import Window from "../Window/Window";

interface ResumeWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeWindow: React.FC<ResumeWindowProps> = ({ isOpen, onClose }) => {
  return (
    <Window title="resume" isOpen={isOpen} onClose={onClose}>
      {/* Browser Address Bar */}
      <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center gap-2">
        {/* Security Icon */}
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        {/* URL Bar */}
        <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
          drive.google.com/file/d/1aONZIDSpgB6D0MS7YF0mieiGeaK-3txZ/view
        </div>
      </div>

      <div className="relative h-full">
        <iframe
          src="https://drive.google.com/file/d/1aONZIDSpgB6D0MS7YF0mieiGeaK-3txZ/preview"
          className="w-full h-full border-none"
          title="Resume Preview"
          allow="autoplay"
        />
      </div>
    </Window>
  );
};

export default ResumeWindow; 