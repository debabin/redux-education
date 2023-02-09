import { Provider } from "react-redux";

import { CardList } from "./components/CardList/CardList";
import { CardView } from "./components/CardView/CardView";

import { store } from "./redux/store";

export const ReduxCardsApp = () => (
  <Provider store={store}>
    <CardView />
    <CardList />
  </Provider>
);
