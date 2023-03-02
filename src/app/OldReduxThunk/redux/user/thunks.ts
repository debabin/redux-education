import { requestUsers } from "../../utils/requests";
import { AppDispatch } from "../store";
import { fetchUserFailed, fetchUserPending, fetchUserSuccess } from "./actions";

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchUserPending(true));

    try {
      const response = await requestUsers();
      const response2 = await requestUsers();
      const response3 = await requestUsers();
      console.log("@in thunk");
      dispatch(fetchUserSuccess(response.data));
      dispatch(fetchUserPending(false));
    } catch (error: any) {
      dispatch(fetchUserFailed(error));
    }
  };
};
