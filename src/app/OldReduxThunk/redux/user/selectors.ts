import { RootState } from "../store";

export const getUserData = (state: RootState) => state.user.data;
export const getUserPending = (state: RootState) => state.user.pending;
export const getUserError = (state: RootState) => state.user.error;
