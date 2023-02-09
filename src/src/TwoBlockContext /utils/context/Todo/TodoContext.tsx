import React from "react";

const DEFAULT_TODOS_STATE = [{ id: 1, title: "wash hands" }];

interface TodoContextParams {
  todos: any[];
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
}

export const TodoContext = React.createContext<TodoContextParams>({
  todos: DEFAULT_TODOS_STATE,
  deleteTodo: () => {},
  addTodo: () => {},
});

interface TodoProviderProps {
  children: React.ReactNode;
}
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = React.useState(DEFAULT_TODOS_STATE);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: todos.length + 1, title }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const value = React.useMemo(
    () => ({
      todos,
      addTodo,
      deleteTodo,
    }),
    [todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => React.useContext(TodoContext);
