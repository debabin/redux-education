import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "./types";

export interface TodosState {
  readonly data: Todo[];
}
const initialState: TodosState = {
  data: [],
};

export const prefix = "todos";
export const todosSlice = createSlice({
  name: prefix,
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ text: string }>) {
      const todo = {
        id: Math.random(),
        text: action.payload.text,
        editing: false,
        complete: false,
      };

      state.data.push(todo);
    },
    removeItem(state, action) {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    },
    toggleItem(state, action) {
      const todo = state.data.find((todo) => todo.id === action.payload.id);
      if (!todo) return;
      todo.complete = !todo.complete;
    },
    updateItem(state, action) {
      const todo = state.data.find((todo) => todo.id === action.payload.id);
      if (!todo) return;
      todo.text = action.payload.text;
    },
    toggleEditItem(state, action) {
      const todo = state.data.find((todo) => todo.id === action.payload.id);
      if (!todo) return;
      todo.editing = !todo.editing;
    },
  },
});

export const { addItem, removeItem, toggleEditItem, toggleItem, updateItem } =
  todosSlice.actions;
export const todosReducer = todosSlice.reducer;
