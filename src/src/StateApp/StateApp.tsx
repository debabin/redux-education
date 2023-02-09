import React from "react";
import { Input, Button, Space, Typography } from "antd";

const DEFAULT_TODOS_STATE = [{ id: 1, title: "wash hands" }];

export const StateApp = () => {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState(DEFAULT_TODOS_STATE);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: todos.length + 1, title }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Space wrap direction="vertical">
      <Space wrap>
        <Input
          value={input}
          placeholder="Title"
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input.length}
          type="primary"
          onClick={() => {
            addTodo(input);
            setInput("");
          }}
        >
          ADD
        </Button>
      </Space>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <Space wrap>
            <Typography.Text>
              {index + 1}. {todo.title}
            </Typography.Text>

            <Button danger type="primary" onClick={() => deleteTodo(todo.id)}>
              DELETE
            </Button>
          </Space>
        </div>
      ))}
    </Space>
  );
};
