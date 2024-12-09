import React, { useState, useEffect } from "react";

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black/20 backdrop-blur-xl rounded-xl px-6 py-4 text-white">
      <div className="text-4xl font-bold tracking-wider">
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
    </div>
  );
};

const WeatherWidget = () => {
  return (
    <div className="bg-gradient-to-br from-black via-black/95 to-blue-950/90 backdrop-blur-xl rounded-xl p-4 text-white w-96">
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <div className="text-4xl font-light">20°</div>
            <div className="text-sm">Bengaluru</div>
          </div>
          <div className="text-right">
            <div className="text-sm">Mostly Clear</div>
            <div className="text-xs text-gray-300">H:29° L:19°</div>
          </div>
        </div>

        {/* Hourly forecast */}
        <div className="flex justify-between mt-2">
          {["00", "01", "02", "03", "04", "05"].map((hour) => (
            <div key={hour} className="flex flex-col items-center">
              <div className="text-xs">{hour}</div>
              <div className="my-1">🌙</div>
              <div className="text-xs">19°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CalendarWidget = () => {
  const date = new Date();
  const dayName = date.toLocaleString("en-US", { weekday: "short" });
  const monthName = date.toLocaleString("en-US", { month: "short" });
  const dayNumber = date.getDate();
  return (
    <div className="bg-gray-900 backdrop-blur-xl rounded-2xl p-1 text-white w-48 h-48">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-[2.5rem] font-medium tracking-tight">    
          <span className="text-red-400">{dayName}</span> {monthName}
        </div>
        <div className="text-[7.5rem] font-semibold leading-tight -mt-6">{dayNumber}</div>
      </div>
    </div>
  );
};

export { ClockWidget, WeatherWidget, CalendarWidget };
