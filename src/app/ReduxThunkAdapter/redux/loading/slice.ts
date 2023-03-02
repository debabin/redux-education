import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  status: "pending" | "succeeded" | "failed";
}

const initialState = {
  status: "pending",
} as LoadingState;

export const prefix = "loading";
export const loadingSlice = createSlice({
  name: prefix,
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
