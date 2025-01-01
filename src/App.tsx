import React, { useState, useEffect } from "react";
import Desktop from "./components/Desktop/Desktop";
import BootScreen from "./components/BootScreen/BootScreen";
import MobileView from "./components/Mobile/MobileView";

function App() {
  const [isBootComplete, setIsBootComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isBootComplete) {
    return <BootScreen onBootComplete={() => setIsBootComplete(true)} />;
  }

  return isMobile ? <MobileView /> : <Desktop />;
}

export default App;
