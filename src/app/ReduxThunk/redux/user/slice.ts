import { createSlice } from "@reduxjs/toolkit";

import { User } from "../../utils/types/user";
import { addUser, fetchUserById, fetchUsers } from "./api";

interface UsersState {
  entities: User[];
  status: "pending" | "succeeded" | "failed";
}

const initialState = {
  entities: [],
  status: "pending",
} as UsersState;

export const prefix = "users";
export const usersSlice = createSlice({
  name: prefix,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.status = "succeeded";
      });
  },
});

export const {} = usersSlice.actions;
export const userReducer = usersSlice.reducer;
