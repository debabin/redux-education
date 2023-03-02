import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer, prefix as cardsPrefix } from "./cards/slices";

export const store = configureStore({
  reducer: {
    [cardsPrefix]: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
