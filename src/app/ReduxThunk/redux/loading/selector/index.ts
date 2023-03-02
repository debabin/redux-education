import { RootState } from "../../store";

export const getUsersStatus = (state: RootState) => {
  return state.users.status;
};
