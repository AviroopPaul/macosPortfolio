import React, { useState } from "react";

const ResumeApp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-screen bg-black relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white"></div>
        </div>
      )}
      <iframe
        src="https://drive.google.com/file/d/1aONZIDSpgB6D0MS7YF0mieiGeaK-3txZ/preview"
        className="w-full h-full border-none"
        title="Resume Preview"
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default ResumeApp;
