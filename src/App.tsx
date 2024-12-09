import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop/Desktop';
import BootScreen from './components/BootScreen/BootScreen';

function App() {
  const [isBootComplete, setIsBootComplete] = useState(false);

  return isBootComplete ? <Desktop /> : <BootScreen onBootComplete={() => setIsBootComplete(true)} />;
}

export default App;