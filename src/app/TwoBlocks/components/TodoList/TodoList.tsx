import React from "react";
import { Input, Button, Space, Typography } from "antd";

interface TodoListProps {
  todos: any[];
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  addTodo,
}) => {
  const [input, setInput] = React.useState("");

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
