import styles from './SingleTodoElement.module.css';
import ThemeContext from '../../Context/ThemeContext';
import { useContext } from 'react';
import Image from 'next/image';
import checkOnIcon from '../../images/icon-check.svg';
import crossIcon from '../../images/icon-cross.svg';
import { RxCross1 } from 'react-icons/rx';

const SingleTodoElement = ({ todo, deleteTodo, toggleTodo }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`${styles.todoElement} ${
        theme === 'dark' ? 'containerDarkTheme' : 'containerLightTheme'
      }`}
    >
      <div
        className={`${'circle'} ${theme === 'dark' ? '' : 'lightThemeCircle'} ${
          todo.isCompleted ? styles.checkOn : ''
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.isCompleted && (
          <Image
            className={styles.checkMark}
            src={checkOnIcon}
            alt="check on icon"
          />
        )}
      </div>
      <h2
        className={`${
          theme === 'dark' ? styles.taskTitleDark : styles.taskTitleLight
        } ${todo.isCompleted ? styles.completedTodo : ''}`}
      >
        {todo.text}
      </h2>
      <button onClick={() => deleteTodo(todo.id)}>
        <RxCross1
          className={styles.deleteIcon}
          src={crossIcon}
          alt="cross icon"
        />
      </button>
    </div>
  );
};

export default SingleTodoElement;
