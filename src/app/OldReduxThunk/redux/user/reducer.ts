import { User } from "../../utils/types/user";
import { UserTypes, UserActions, Todo } from "./types";

export interface UserState {
  readonly data: User[];
  readonly pending: boolean;
  readonly error: string;
}
const initialState: UserState = {
  data: [],
  pending: false,
  error: "",
};

export const userReducer = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserTypes.FETCH_USERS_SUCCESSES:
      console.log("@reducer end");
      return {
        ...state,
        data: action.payload,
      };

    case UserTypes.FETCH_USERS_PENDING:
      return { ...state, pending: action.payload };

    case UserTypes.FETCH_USERS_FAILED:
      return { ...state, pending: false, error: action.payload };

    default:
      return state;
  }
};
