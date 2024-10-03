'use client';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './TodoContainer.module.css';
import TodoHeader from '../Elements/TodoHeader';
import CreateNewTodo from '../Elements/CreateNewTodo';
import TodoList from '../Elements/TodoList';
import FooterActions from '../Elements/FooterActions';

import {
  addTodoHandler,
  toggleTodoHandler,
  deleteTodoHandler,
  deleteCompletedTodosHandler,
  unCompletedTodosCount,
} from './CRUD/handler';

const TodoBlock = ({ toggleTheme }) => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      text: 'Complete online JavaScript course',
      isCompleted: false,
    },
  ]);

  return (
    <div className={styles.todoBlockContainer}>
      <TodoHeader toggleTheme={toggleTheme} />
      <CreateNewTodo
        addTodo={(text) => addTodoHandler(text, todos, setTodos)}
      />
      <TodoList
        todos={todos}
        deleteTodo={(id) => deleteTodoHandler(id, todos, setTodos)}
        toggleTodo={(id) => toggleTodoHandler(id, todos, setTodos)}
      />
      <FooterActions
        todos={todos}
        unCompletedTodosCount={unCompletedTodosCount(todos)}
        deleteCompletedTodos={() =>
          deleteCompletedTodosHandler(todos, setTodos)
        }
      />
    </div>
  );
};

export default TodoBlock;
