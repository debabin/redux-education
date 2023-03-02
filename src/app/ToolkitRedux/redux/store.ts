import { configureStore } from "@reduxjs/toolkit";
import { todosReducer, prefix as todosPrefix } from "./todo/slice";

export const store = configureStore({
  reducer: {
    [todosPrefix]: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
