'use client';
import styles from './CreateNewTodo.module.css';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import { useContext } from 'react';

const CreateNewTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (text.length <= 30 && text) {
      addTodo(text);
    }
    setText('');
  };
  const theme = useContext(ThemeContext);
  return (
    <form className={`${styles.createNewTodoContainer} ${theme === 'dark'? 'containerDarkTheme': 'containerLightTheme'}`} onSubmit={onSubmitHandler}>
      <div className={`${'circle'} ${theme === 'dark'? '': 'lightThemeCircle'}`}></div>
      <input
        className={styles.input}
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>
        <RxCross1  className={styles.addIcon} width={28} height={28} type="submit" />
      </button>
    </form>
  );
};

export default CreateNewTodo;
