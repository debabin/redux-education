import { Space } from "antd";

import { TodoList } from "./components/TodoList/TodoList";
import { TodoView } from "./components/TodoView/TodoView";
import { TodoProvider } from "./utils/context/Todo/TodoContext";

export const TwoBlocksContextApp = () => (
  <TodoProvider>
    <Space wrap>
      <TodoList />
      <TodoView />
    </Space>
  </TodoProvider>
);
