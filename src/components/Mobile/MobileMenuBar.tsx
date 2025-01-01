import React from "react";
import { FaWifi } from "react-icons/fa";
import { BsReception4 } from "react-icons/bs";
import { IoIosBatteryFull } from "react-icons/io";

const MobileMenuBar: React.FC = () => {
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
    <div className="flex justify-between items-center px-6 py-1 text-white text-base font-medium">
      <span>{time}</span>
      <div className="absolute left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-full" />
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
