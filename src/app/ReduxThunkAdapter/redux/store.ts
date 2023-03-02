import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userReducer, prefix as userPrefix } from "./user/slice";
import { loadingReducer, prefix as loadingPrefix } from "./loading/slice";

export const store = configureStore({
  reducer: {
    [userPrefix]: userReducer,
    [loadingPrefix]: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
