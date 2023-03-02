import React from "react";
import { Input, Button, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todo/selectors";
import {
  removeItem,
  addItem,
  toggleItem,
  toggleEditItem,
  updateItem,
} from "../redux/todo/slice";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const [input, setInput] = React.useState("");
  const [editInput, setEditInput] = React.useState("");

  return (
    <Space wrap direction="vertical">
      <Space wrap>
        <Input
          value={input}
          placeholder="Title"
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input.length}
          type="primary"
          onClick={() => {
            dispatch(addItem({ text: input }));
            setInput("");
          }}
        >
          ADD
        </Button>
      </Space>
      {todos.map((todo, index) => {
        if (todo.editing) {
          return (
            <Space wrap key={todo.id}>
              <Input
                value={editInput}
                placeholder="Title"
                onChange={(event) => setEditInput(event.target.value)}
              />
              <Button
                disabled={!editInput.length}
                type="primary"
                onClick={() => {
                  dispatch(updateItem({ id: todo.id, text: editInput }));
                  dispatch(toggleEditItem({ id: todo.id }));
                  setInput("");
                }}
              >
                EDIT
              </Button>
            </Space>
          );
        }

        return (
          <div key={todo.id}>
            <Space wrap>
              <Typography.Text
                onClick={() => dispatch(toggleItem({ id: todo.id }))}
              >
                {todo.complete && "👌 "}
                {index + 1}. {todo.text}
              </Typography.Text>

              <Button
                type="primary"
                onClick={() => {
                  setEditInput(todo.text);
                  dispatch(toggleEditItem({ id: todo.id }));
                }}
              >
                EDIT
              </Button>
              <Button
                danger
                type="primary"
                onClick={() => dispatch(removeItem({ id: todo.id }))}
              >
                DELETE
              </Button>
            </Space>
          </div>
        );
      })}
    </Space>
  );
};
