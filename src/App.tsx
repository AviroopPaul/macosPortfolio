import React, { useState, useEffect, useCallback } from "react";
import Desktop from "./components/Desktop/Desktop";
import BootScreen from "./components/BootScreen/BootScreen";
import MobileView from "./components/Mobile/MobileView";
import ContextMenu from "./components/ContextMenu/ContextMenu";

function App() {
  const [isBootComplete, setIsBootComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [contextMenu, setContextMenu] = useState<{
    show: boolean;
    x: number;
    y: number;
  }>({
    show: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      x: e.pageX,
      y: e.pageY,
    });
  }, []);

  const closeContextMenu = useCallback(() => {
    setContextMenu({
      show: false,
      x: 0,
      y: 0,
    });
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleContextMenu]);

  if (!isBootComplete) {
    return <BootScreen onBootComplete={() => setIsBootComplete(true)} />;
  }

  return (
    <>
      {isMobile ? <MobileView /> : <Desktop />}
      {contextMenu.show && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
        />
      )}
    </>
  );
}

export default App;
