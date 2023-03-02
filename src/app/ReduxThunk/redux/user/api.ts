import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  requestUserById,
  createUser,
  requestUsers,
} from "../../utils/requests";
import { setStatus } from "../loading/slice";

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id: number) => {
    const response = await requestUserById({ params: { id } });
    return response.data;
  }
);

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { dispatch }) => {
    try {
      dispatch(setStatus("loading"));
      const response = await requestUsers();

      dispatch(setStatus("succeeded"));
      return response.data;
    } catch (error) {
      dispatch(setStatus("failed"));
      return [];
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (name: string) => {
    const response = await createUser({ params: { name } });
    return response.data;
  }
);
