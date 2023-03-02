import { Provider } from "react-redux";
import { UserList } from "./components/UserList/UserList";

import { store } from "./redux/store";

export const ReduxRTKQueryApp = () => (
  <Provider store={store}>
    <UserList />
    <UserList />
  </Provider>
);
