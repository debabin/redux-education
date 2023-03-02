import { Provider } from "react-redux";
import { UserList } from "./components/UserList/UserList";

import { store } from "./redux/store";

export const OldReduxThunkApp = () => (
  <Provider store={store}>
    <UserList />
  </Provider>
);
