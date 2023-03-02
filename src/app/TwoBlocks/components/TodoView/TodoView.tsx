import React from "react";
import { Card, Space, Typography } from "antd";

interface TodoViewProps {
  todos: any[];
}

export const TodoView: React.FC<TodoViewProps> = ({ todos }) => (
  <Space wrap direction="vertical">
    <Card title="Your Todos">
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <Space wrap>
            <Typography.Text>
              {index + 1}. {todo.title}
            </Typography.Text>
          </Space>
        </div>
      ))}
    </Card>
  </Space>
);
