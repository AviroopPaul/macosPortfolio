import React, { useState } from "react";
import Window from "../Window/Window";
import {
  FaLock,
  FaChevronLeft,
  FaChevronRight,
  FaRedo,
  FaStar,
} from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

interface SafariWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const SafariWindow: React.FC<SafariWindowProps> = ({ isOpen, onClose }) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Default Google Search URL
  const defaultUrl = "https://www.google.com/search?igu=1";

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      let processedUrl = url;
      if (!url.includes(".") && !url.includes("://")) {
        // If it's just a search term, convert to Google search URL
        processedUrl = `https://www.google.com/search?q=${encodeURIComponent(
          url
        )}`;
      } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
        processedUrl = `https://${url}`;
      }

      setUrl(processedUrl);
    } catch (err) {
      setError("Failed to load the webpage");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Window title="Safari" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full bg-white">
        {/* Toolbar */}
        <div className="bg-[#f5f5f5] border-b border-gray-200 p-2 flex items-center space-x-2">
          <button className="p-1.5 rounded-md text-gray-400">
            <FaChevronLeft className="w-3 h-3" />
          </button>
          <button className="p-1.5 rounded-md text-gray-400">
            <FaChevronRight className="w-3 h-3" />
          </button>
          <button className="p-1.5 rounded-md text-gray-600 hover:bg-gray-200">
            <FaRedo className="w-3 h-3" />
          </button>

          {/* URL Bar */}
          <div className="flex-1 flex items-center">
            <form
              onSubmit={handleUrlSubmit}
              className="flex-1 flex items-center"
            >
              <div className="flex items-center bg-white w-full px-3 py-1 rounded-lg border border-gray-300 focus-within:border-blue-500">
                <FaLock className="w-3 h-3 text-gray-400 mr-2" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 text-sm outline-none"
                  placeholder="Search Google or enter website URL"
                />
              </div>
            </form>
          </div>

          <button className="p-1.5 rounded-md text-gray-600 hover:bg-gray-200">
            <FaStar className="w-3 h-3" />
          </button>
          <button className="p-1.5 rounded-md text-gray-600 hover:bg-gray-200">
            <IoShareOutline className="w-4 h-4" />
          </button>
        </div>

        {/* Browser Content */}
        <div className="flex-1 bg-white">
          <iframe
            src={url || defaultUrl}
            className="w-full h-full border-none"
            title="Safari Browser"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    </Window>
  );
};

export default SafariWindow;
