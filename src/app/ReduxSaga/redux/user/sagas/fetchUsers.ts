import { createAction } from "@reduxjs/toolkit";
import { call, put, SagaReturnType } from "redux-saga/effects";

import { requestUsers } from "../../../utils/requests";
import { prefix, setEntities, setStatus } from "../slice";

export const callFetchUsers = createAction(`${prefix}/fetchUsers`);

export function* fetchUsers() {
  try {
    yield put(setStatus("pending"));
    const response: SagaReturnType<typeof requestUsers> = yield call(
      requestUsers
    );
    yield put(setEntities(response.data));
    yield put(setStatus("succeeded"));
  } catch (error: any) {
    yield put(setStatus("failed"));
  }
}
