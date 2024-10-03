import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';
import styles from './TodoHeader.module.css';
import Image from 'next/image';
import { useState } from 'react';

const TodoHeader = ({ toggleTheme }) => {
  const [sunTheme, setSunTheme] = useState(true)
  const handleThemeToggle = () => {
    toggleTheme();
    setSunTheme(!sunTheme); 
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.TodoTitle}>TODO</h1>
      <button onClick={()=> handleThemeToggle()}>
        {sunTheme? <Image className={styles.sun} src={sun} alt="sun icon" />: <Image className={styles.sun} src={moon} alt="sun icon" />}
      </button>
    </header>
  );
};

export default TodoHeader;
