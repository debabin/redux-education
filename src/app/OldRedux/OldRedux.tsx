import { Typography } from "antd";
import { Provider } from "react-redux";

import { TodoList } from "./components/TodoList";

import { store } from "./redux/store";

export const OldReduxApp = () => (
  <Provider store={store}>
    <Typography.Title>Old Redux</Typography.Title>
    <TodoList />
  </Provider>
);
