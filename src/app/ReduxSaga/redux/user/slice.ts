import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { User } from "../../utils/types/user";

export const usersAdapter = createEntityAdapter({
  sortComparer: (a: User, b: User) => a.name.localeCompare(b.name),
});

interface UsersState {
  entities: User[];
  status: "pending" | "succeeded" | "failed";
}

export const prefix = "users";
export const usersSlice = createSlice({
  name: prefix,
  initialState: usersAdapter.getInitialState<UsersState>({
    entities: [],
    status: "pending",
  }),
  reducers: {
    setAddUser: (state, action) => {
      usersAdapter.addOne(state, action.payload);
    },
    setEntities: (state, action) => {
      usersAdapter.setAll(state, action.payload);
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setAddUser, setEntities, setStatus } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
