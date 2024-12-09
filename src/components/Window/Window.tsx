import React, { useState, useRef } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  dockItemPosition?: { x: number; y: number };
}

const Window: React.FC<WindowProps> = ({ title, isOpen, onClose, children, dockItemPosition }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const [previousStyles, setPreviousStyles] = useState<{ width?: string; height?: string; top?: string; left?: string }>();
  const [isMinimized, setIsMinimized] = useState(false);

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.pageX;
    const startY = e.pageY;
    const startWidth = windowRef.current?.offsetWidth;
    const startHeight = windowRef.current?.offsetHeight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!startWidth || !startHeight) return;
      
      const newWidth = startWidth + (e.pageX - startX);
      const newHeight = startHeight + (e.pageY - startY);
      
      if (windowRef.current) {
        windowRef.current.style.width = `${Math.max(400, newWidth)}px`;
        windowRef.current.style.height = `${Math.max(300, newHeight)}px`;
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (!isOpen) return null;

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (windowRef.current && dockItemPosition) {
      // Calculate the final position relative to the dock item
      const windowRect = windowRef.current.getBoundingClientRect();
      const startX = windowRect.left;
      const startY = windowRect.top;
      
      // Set custom properties for the animation
      windowRef.current.style.setProperty('--start-x', `${startX}px`);
      windowRef.current.style.setProperty('--start-y', `${startY}px`);
      windowRef.current.style.setProperty('--end-x', `${dockItemPosition.x}px`);
      windowRef.current.style.setProperty('--end-y', `${dockItemPosition.y}px`);
    }
    
    setIsMinimized(true);
    setTimeout(() => {
      setIsMinimized(false);
      onClose();
    }, 500);
  };

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!isMaximized && windowRef.current) {
      // Store current dimensions before maximizing
      setPreviousStyles({
        width: windowRef.current.style.width,
        height: windowRef.current.style.height,
        top: windowRef.current.style.top,
        left: windowRef.current.style.left,
      });
      
      // Maximize the window
      windowRef.current.style.width = '100vw';
      windowRef.current.style.height = '100vh';
      windowRef.current.style.top = '0';
      windowRef.current.style.left = '0';
      windowRef.current.style.transform = 'none';
      windowRef.current.style.zIndex = '50';
    } else if (windowRef.current && previousStyles) {
      // Restore previous dimensions
      windowRef.current.style.width = previousStyles.width || '80vw';
      windowRef.current.style.height = previousStyles.height || '80vh';
      windowRef.current.style.top = previousStyles.top || '3rem';
      windowRef.current.style.left = previousStyles.left || '50%';
      windowRef.current.style.transform = 'translateX(-50%)';
      windowRef.current.style.zIndex = '40';
    }
    
    setIsMaximized(!isMaximized);
  };

  return (
    <div 
      ref={windowRef}
      style={{
        '--start-x': '0px',
        '--start-y': '0px',
        '--end-x': '0px',
        '--end-y': '0px',
      } as React.CSSProperties}
      className={`fixed top-12 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-gray-900 rounded-lg shadow-2xl 
                border border-gray-700 overflow-hidden z-40 ${!isMaximized ? 'resize' : ''} 
                ${isMinimized ? 'minimize-animation' : ''}`}
    >
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <button 
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
          />
          <button 
            onClick={handleMinimize}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600"
          />
          <button 
            onClick={handleMaximize}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600"
          />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-gray-300">{title}</span>
      </div>
      <div className="h-[calc(100%-2.5rem)] overflow-auto relative text-gray-300">
        {children}
        <div 
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
          onMouseDown={startResize}
        />
      </div>
    </div>
  );
};

export default Window;