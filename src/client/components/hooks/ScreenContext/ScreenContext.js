import React, {useState, useEffect} from 'react';

// Create the context with an empty array and function.
const ScreenContext = React.createContext([{}, () => {}]);

const ScreenProvider = ({children}) => {
  const [orientation, setOrientation] = useState(screen.orientation);

  const handleOrientation = () => {
    setOrientation(screen.orientation);
  }

  useEffect(() => {
    window.addEventListener("resize", handleOrientation);
    return () => window.removeEventListener("resize", handleOrientation);
  }, []);

  return (
    <ScreenContext.Provider value={[orientation, setOrientation]}>
      {children}
    </ScreenContext.Provider>
  );
};

export {ScreenContext, ScreenProvider};
