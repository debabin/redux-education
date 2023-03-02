import { User } from "../../utils/types/user";

export enum UserTypes {
  FETCH_USER = "FETCH_USER",
  FETCH_USERS_PENDING = "FETCH_USER_PENDING",
  FETCH_USERS_SUCCESSES = "FETCH_USERS_SUCCESSES",
  FETCH_USERS_FAILED = "FETCH_USERS_FAILED",
}

export interface Todo {
  id: number;
  text: string;
  editing: boolean;
  complete: boolean;
}

export interface FetchUserSuccessAction {
  type: UserTypes.FETCH_USERS_SUCCESSES;
  payload: User[];
}

export interface FetchUserFailedAction {
  type: UserTypes.FETCH_USERS_FAILED;
  payload: string;
}

export interface FetchUserPendingAction {
  type: UserTypes.FETCH_USERS_PENDING;
  payload: boolean;
}
export type UserActions =
  | FetchUserSuccessAction
  | FetchUserFailedAction
  | FetchUserPendingAction;
