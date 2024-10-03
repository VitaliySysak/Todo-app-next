import { v4 as uuid } from 'uuid';

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export const addTodoHandler = (text: string, todos: Todo[], setTodos: (todos: Todo[]) => void) => {
  const newTodo: Todo = {
    id: uuid(),
    text: text,
    isCompleted: false,
  };
  setTodos([...todos, newTodo]);
};

export const toggleTodoHandler = (id: string, todos: Todo[], setTodos: (todos: Todo[]) => void) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
  );
};

export const deleteTodoHandler = (id: string, todos: Todo[], setTodos: (todos: Todo[]) => void) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

export const deleteCompletedTodosHandler = (todos: Todo[], setTodos: (todos: Todo[]) => void) => {
  setTodos(todos.filter((todo) => !todo.isCompleted));
};

export const unCompletedTodosCount = (todos: Todo[]): number => {
  return todos.filter((todo) => !todo.isCompleted).length;
};
