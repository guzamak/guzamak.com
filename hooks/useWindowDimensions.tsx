import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    };
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;