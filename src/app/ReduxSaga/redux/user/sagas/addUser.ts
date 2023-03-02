import { createAction } from "@reduxjs/toolkit";
import { call, put, SagaReturnType } from "redux-saga/effects";

import { createUser } from "../../../utils/requests";
import { User } from "../../../utils/types/user";
import { prefix, setAddUser } from "../slice";

export const callAddUser = createAction<{ name: string }>(`${prefix}/addUser`);

export function* addUser({ payload }: { payload: { name: User["name"] } }) {
  const response: SagaReturnType<typeof createUser> = yield call(createUser, {
    params: { name: payload.name },
  });
  console.log(response.data);
  yield put(setAddUser(response.data));
}
