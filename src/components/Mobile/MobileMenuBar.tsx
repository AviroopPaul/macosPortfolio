import React from "react";
import { FaWifi } from "react-icons/fa";
import { BsReception4 } from "react-icons/bs";
import { IoIosBatteryFull } from "react-icons/io";

interface MobileMenuBarProps {
  isAppOpen?: boolean;
}

const MobileMenuBar: React.FC<MobileMenuBarProps> = ({ isAppOpen = false }) => {
  const [time, setTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex justify-between items-center px-6 py-2 text-white text-base font-medium ${
        isAppOpen ? "bg-black" : ""
      }`}
    >
      <span>{time}</span>
      <div className="absolute left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-full overflow-hidden">
        <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-[12px] h-[12px] rounded-full bg-gradient-radial from-slate-600/40 via-transparent to-transparent" />
        <div className="absolute left-[55%] top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-gradient-radial from-slate-600/30 via-transparent to-transparent" />

        <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-slate-400/20" />
        <div className="absolute left-[55%] top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-slate-400/20" />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <BsReception4 className="h-5 w-5" />
          <span className="text-sm">5G</span>
        </div>
        <FaWifi className="h-4.5 w-4.5" />
        <IoIosBatteryFull className="h-6 w-6" />
      </div>
    </div>
  );
};

export default MobileMenuBar;
