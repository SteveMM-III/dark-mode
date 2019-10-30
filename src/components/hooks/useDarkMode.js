import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = ( key, initialValue ) => {
  
  const [ value, setValue ] = useLocalStorage( key, initialValue );

  useEffect( () => {
    document.querySelector( "body" ).classList.toggle( 'dark-mode' );
  }, [ value ] ); 

  return [ value, setValue ];
};