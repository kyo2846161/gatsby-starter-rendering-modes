import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: winWidth, innerHeight: winHeight } = typeof window !== 'undefined' ? window : "";
  return {
    winWidth,
    winHeight
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = typeof window !== 'undefined' ? useState(getWindowDimensions()) : useState("");

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    // if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    // }
  }, []);

  return windowDimensions;
}