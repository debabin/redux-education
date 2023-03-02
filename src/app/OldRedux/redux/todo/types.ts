export enum TodosTypes {
  ADD_ITEM = "ADD_ITEM",
  TOGGLE_ITEM = "TOGGLE_ITEM",
  TOGGLE_EDIT_ITEM = "TOGGLE_EDIT_ITEM",
  UPDATE_ITEM = "UPDATE_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  LOAD_REQUEST = "LOAD_REQUEST",
  LOAD_SUCCESS = "LOAD_SUCCESS",
  LOAD_FAILURE = "LOAD_FAILURE",
}

export interface Todo {
  id: number;
  text: string;
  editing: boolean;
  complete: boolean;
}

export interface TodoListActionTypes {
  type: string;
  payload: Todo;
  data: Todo[];
}
