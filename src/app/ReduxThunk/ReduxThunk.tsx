import { Provider } from "react-redux";
import { UserList } from "./components/UserList/UserList";

import { store } from "./redux/store";

export const ReduxThunkApp = () => (
  <Provider store={store}>
    <UserList />
  </Provider>
);
