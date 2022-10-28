import {useContext} from 'react';
import {ScreenContext} from './ScreenContext.js';

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useContext(ScreenContext);
  return orientation;
};

export default useScreenOrientation;
