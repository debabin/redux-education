import React from "react";
import { Input, Button, Space, Typography } from "antd";

import { useTodo } from "../../utils/context/Todo/TodoContext";

export const TodoList = () => {
  const { todos, deleteTodo, addTodo } = useTodo();
  const [input, setInput] = React.useState("");

  console.log("TodoList render");

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
