'use client';
import TodoBlock from './components/TodoContainer/TodoContainer';
import CheckBox from './components/CheckBox/CheckBox';
import darkBgImage from './images/bg-desktop-dark.jpg';
import lightBgImage from './images/bg-desktop-light.jpg';
import Image from 'next/image';
import ThemeContext from './Context/ThemeContext';
import { useState } from 'react';

function Home() {
  const [theme, setTheme] = useState('dark');
  function toggleThemeHandler() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
    document.body.classList.toggle('lightTheme');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Image
          priority
          className="bgDarkImg"
          src={theme === 'dark' ? darkBgImage : lightBgImage}
          alt="building"
        />
        <div className="main">
          <TodoBlock toggleTheme={toggleThemeHandler} />
          <CheckBox />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
