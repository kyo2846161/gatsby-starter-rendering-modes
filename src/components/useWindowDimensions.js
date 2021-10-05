import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: winWidth, innerHeight: winHeight } = window;
  return {
    winWidth,
    winHeight
  };
}

export default function useWindowDimensions() {
  // const [windowDimensions, setWindowDimensions] = useState(typeof window !== 'undefined' ? getWindowDimensions() : "");
  const [windowDimensions, setWindowDimensions] = useState({winWidth: undefined, winHeight: undefined});

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    
    window.addEventListener('resize', handleResize);
    
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
    
    
  }, []);

  return windowDimensions;
}