import { RootState } from "../../store";
import { usersAdapter } from "../slice";

const userSelector = usersAdapter.getSelectors(
  (state: RootState) => state.users
);

export const getUsersEntities = (state: RootState) => {
  return userSelector.selectAll(state);
};

export const getUsersStatus = (state: RootState) => {
  return state.users.status;
};
