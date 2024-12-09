import React, { useState, useEffect, useRef } from "react";
import { FaClock, FaBed } from "react-icons/fa";
import { GiUsaFlag, GiJapan } from "react-icons/gi";
import { FiFlag } from "react-icons/fi";

interface WorldClock {
  city: string;
  timezone: string;
  offset: number;
  flag: React.ReactNode;
}

export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [showMenu, setShowMenu] = useState(false);
  const clockRef = useRef<HTMLDivElement>(null);

  // Example world clocks
  const worldClocks: WorldClock[] = [
    {
      city: "New York",
      timezone: "America/New_York",
      offset: -4,
      flag: <FaClock className="w-4 h-4 text-blue-600" />, // Clock icon
    },
    {
      city: "London",
      timezone: "Europe/London",
      offset: 1,
      flag: <FaClock className="w-4 h-4 text-blue-500" />, // Clock icon
    },
    {
      city: "Tokyo",
      timezone: "Asia/Tokyo",
      offset: 9,
      flag: <FaClock className="w-4 h-4 text-red-500" />, // Clock icon
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        clockRef.current &&
        !clockRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      clearInterval(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getLocalTime = (offset: number) => {
    const localTime = new Date();
    const utc = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * offset);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div ref={clockRef} className="relative">
      <span
        className="text-sm cursor-default"
        onClick={() => setShowMenu(!showMenu)}
      >
        {time.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </span>

      {showMenu && (
        <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-2 px-4 min-w-[280px]">
          <div className="text-2xl font-semibold mb-1 text-black">
            {time.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
          <div className="text-sm mb-3 text-black">
            {formatDate(time)}
          </div>

          <div className="border-t border-gray-200 my-2"></div>

          <div className="space-y-3">
            {worldClocks.map((clock) => (
              <div
                key={clock.city}
                className="flex items-center justify-between text-black"
              >
                <div className="flex items-center gap-2">
                  <div>{clock.flag}</div>
                  <div>
                    <div className="text-sm">{clock.city}</div>
                    <div className="text-xs text-gray-500">
                      {formatDate(getLocalTime(clock.offset))}
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  {getLocalTime(clock.offset).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 my-2"></div>
        </div>
      )}
    </div>
  );
};
