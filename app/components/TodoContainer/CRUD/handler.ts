import { v4 as uuid } from 'uuid';

export const addTodoHandler = (text: string, todos: any[], setTodos: any) => {
  const newTodo = {
    id: uuid(),
    text: text,
    isCompleted: false,
  };
  setTodos([...todos, newTodo]);
};

export const toggleTodoHandler = (id: string, todos: any[], setTodos: any) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
  );
};

export const deleteTodoHandler = (id: string, todos: any[], setTodos: any) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

export const deleteCompletedTodosHandler = (todos: any[], setTodos: any) => {
  setTodos(todos.filter((todo) => !todo.isCompleted));
};

export const unCompletedTodosCount = (todos: any[]) => {
  return todos.filter((todo) => !todo.isCompleted).length;
};
