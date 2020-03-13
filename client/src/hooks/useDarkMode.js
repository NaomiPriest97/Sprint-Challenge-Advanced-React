import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark');

    useEffect(() => {
      const body = document.querySelector('body');
      return darkMode ? body.classList.add('dark-mode'): body.classList.remove('dark-mode');
    }, [darkMode]);
    return [darkMode, setDarkMode];
};