import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { todosReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store = createStore(
  rootReducer,
  // @ts-ignore
  composeWithDevTools()
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
