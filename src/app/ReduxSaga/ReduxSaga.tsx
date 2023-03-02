import { Provider } from "react-redux";
import { UserList } from "./components/UserList/UserList";

import store from "./redux/store";

export const ReduxSagaApp = () => (
  <Provider store={store}>
    <UserList />
  </Provider>
);
