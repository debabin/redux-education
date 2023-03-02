import { RootState } from "../../store";

export const getUsersEntities = (state: RootState) => {
  return state.users.entities;
};

export const getUsersStatus = (state: RootState) => {
  return state.users.status;
};
