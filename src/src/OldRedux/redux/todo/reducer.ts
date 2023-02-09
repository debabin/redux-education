import { TodosTypes, TodoListActionTypes, Todo } from "./types";

export interface TodosState {
  readonly data: Todo[];
}
const initialState: TodosState = {
  data: [],
};

export const todosReducer = (
  state = initialState,
  action: TodoListActionTypes
): TodosState => {
  switch (action.type) {
    case TodosTypes.ADD_ITEM:
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            text: action.payload.text,
            editing: false,
            complete: false,
          },
        ],
      };

    case TodosTypes.TOGGLE_ITEM:
      return {
        data: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, complete: !item.complete }
            : item
        ),
      };

    case TodosTypes.TOGGLE_EDIT_ITEM:
      return {
        data: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, editing: !item.editing }
            : item
        ),
      };

    case TodosTypes.UPDATE_ITEM:
      return {
        data: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        ),
      };

    case TodosTypes.REMOVE_ITEM:
      return {
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
