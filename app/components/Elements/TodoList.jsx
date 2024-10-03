import SingleTodoElement from './SingleTodoElement';
import styles from './TodoList.module.css';
import ThemeContext from '../../Context/ThemeContext';
import { useContext } from 'react';

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${styles.listContainer} ${theme === 'dark'? 'containerDarkTheme': 'containerLightTheme'}`}>
      {todos.map((todo) => (
        <SingleTodoElement key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
