import { User } from "../../utils/types/user";
import { UserTypes } from "./types";

export function fetchUserPending(boolean: boolean) {
  return {
    type: UserTypes.FETCH_USERS_PENDING as const,
    payload: boolean,
  };
}
export function fetchUserFailed(error: string) {
  return {
    type: UserTypes.FETCH_USERS_FAILED as const,
    payload: error,
  };
}
export function fetchUserSuccess(users: User[]) {
  return {
    type: UserTypes.FETCH_USERS_SUCCESSES as const,
    payload: users,
  };
}
