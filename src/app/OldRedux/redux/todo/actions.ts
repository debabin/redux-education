import { TodosTypes } from "./types";

export const addItem = (text: string) => ({
  type: TodosTypes.ADD_ITEM,
  payload: {
    text,
  },
});

export const toggleItem = (id: number) => ({
  type: TodosTypes.TOGGLE_ITEM,
  payload: {
    id,
  },
});

export const toggleEditItem = (id: number) => ({
  type: TodosTypes.TOGGLE_EDIT_ITEM,
  payload: {
    id,
  },
});

export const updateItem = (id: number, text: string) => ({
  type: TodosTypes.UPDATE_ITEM,
  payload: {
    id,
    text,
  },
});

export const removeItem = (id: number) => ({
  type: TodosTypes.REMOVE_ITEM,
  payload: {
    id,
  },
});
