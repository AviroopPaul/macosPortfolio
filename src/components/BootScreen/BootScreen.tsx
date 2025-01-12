import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";

const BootScreen = ({ onBootComplete }: { onBootComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onBootComplete();
          return 100;
        }

        // First 50%: Regular increments
        if (prev < 50) {
          return prev + 2;
        }

        // After 50%: Faster staggered loading with larger random increments
        const randomIncrement =
          Math.random() < 0.3
            ? 0 // 30% chance of no progress
            : Math.random() * 5 + 2; // Random progress between 2 and 7

        return Math.min(prev + randomIncrement, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onBootComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-white text-center space-y-4">
        <FaApple size={100} className="mx-auto" />
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
