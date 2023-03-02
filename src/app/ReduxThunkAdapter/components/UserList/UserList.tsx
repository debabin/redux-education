import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Input, Space, Typography } from "antd";

import { getUsersEntities, getUsersStatus } from "../../redux/user/selector";
import { addUser, fetchUsers } from "../../redux/user/api";
import { useAppDispatch } from "../../redux/store";

export const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(getUsersEntities);
  const status = useSelector(getUsersStatus);

  const [input, setInput] = React.useState("");

  useEffect(() => {
    dispatch(fetchUsers())
      .unwrap()
      .then((data) => console.log(data));
  }, []);

  if (status === "pending") {
    return <Typography.Text>loading</Typography.Text>;
  }

  if (status === "failed") {
    return <Typography.Text>failed</Typography.Text>;
  }

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
            dispatch(addUser(input));
            setInput("");
          }}
        >
          ADD
        </Button>
      </Space>
      {users.map((user, index) => (
        <div key={user.id}>
          <Space wrap>
            <Typography.Text>
              {index + 1}. {user.emoji} {user.name}
            </Typography.Text>
          </Space>
        </div>
      ))}
    </Space>
  );
};
