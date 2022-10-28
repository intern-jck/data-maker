import React, {useState, useEffect} from 'react';

// Create the context with an empty array and function.
const WindowContext = React.createContext([{}, () => {}]);

const WindowProvider = ({children}) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: screen.orientation,
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: screen.orientation,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowContext.Provider value={[size, setSize]}>
      {children}
    </WindowContext.Provider>
  );
};

export {WindowContext, WindowProvider};
