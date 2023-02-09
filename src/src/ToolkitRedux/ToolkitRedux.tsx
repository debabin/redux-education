import { Typography } from "antd";
import { Provider } from "react-redux";

import { TodoList } from "./components/TodoList";

import { store } from "./redux/store";

export const ToolkitReduxApp = () => (
  <Provider store={store}>
    <Typography.Title>Toolkit Redux</Typography.Title>
    <TodoList />
  </Provider>
);
