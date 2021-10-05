import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: winWidth, innerHeight: winHeight } = window;
  return {
    winWidth,
    winHeight
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(typeof window !== 'undefined' ? getWindowDimensions() : "");

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    // if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    // }
  }, []);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  return windowDimensions;
}