import { takeEvery } from "redux-saga/effects";

import { addUser, callAddUser } from "./addUser";
import { callFetchUsers, fetchUsers } from "./fetchUsers";

export function* userSaga() {
  yield takeEvery(callFetchUsers, fetchUsers);
  yield takeEvery(callAddUser, addUser);
}
