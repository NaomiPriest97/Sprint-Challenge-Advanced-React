import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Players</h1>
      <div className="dark-mode__toggle">
        <div>
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>Dark Mode</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
