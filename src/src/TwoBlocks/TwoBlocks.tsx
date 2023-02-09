import React from "react";
import { Space } from "antd";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoView } from "./components/TodoView/TodoView";

const DEFAULT_TODOS_STATE = [{ id: 1, title: "wash hands" }];

export const TwoBlocksApp = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODOS_STATE);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: todos.length + 1, title }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Space wrap>
      <TodoList todos={todos} deleteTodo={deleteTodo} addTodo={addTodo} />
      <TodoView todos={todos} />
    </Space>
  );
};
