import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { userSaga } from "./user/sagas";

import { userReducer, prefix as userPrefix } from "./user/slice";

function* rootSaga() {
  yield all([userSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    [userPrefix]: userReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

// @ts-ignore
store.runSaga = sagaMiddleware.run;

export default store;
