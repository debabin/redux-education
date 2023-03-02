import { Card, Space, Typography } from "antd";

import { useTodo } from "../../utils/context/Todo/TodoContext";

export const TodoView = () => {
  const { todos } = useTodo();

  console.log("TodoView render");

  return (
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
};
