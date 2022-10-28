import {useContext} from 'react';
import {WindowContext} from './WindowContext.js';

const useWindowSize = () => {
  const [size, setSize] = useContext(WindowContext);
  return size;
};

export default useWindowSize;
