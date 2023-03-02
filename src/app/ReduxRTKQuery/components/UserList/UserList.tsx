import React, { useEffect } from "react";
import { Button, Input, Space, Typography } from "antd";

import {
  useAddUserMutation,
  useGetUsersQuery,
  userApi,
} from "../../redux/user/api";
import { useAppDispatch } from "../../redux/store";

export const UserList = () => {
  // const dispatch = useAppDispatch();
  const getUsersQuery = useGetUsersQuery(undefined, {
    selectFromResult: (data) => {
      console.log("reselect");
      return data;
    },
  });
  const [addUser, addUserMutation] = useAddUserMutation();
  const [input, setInput] = React.useState("");

  if (getUsersQuery.isLoading) {
    return <Typography.Text>loading</Typography.Text>;
  }

  if (getUsersQuery.isError) {
    return <Typography.Text>failed</Typography.Text>;
  }

  const users = getUsersQuery.data;

  // const onClick = async () => {
  //   console.log("@@@@");
  //   await dispatch(userApi.endpoints.addUser.initiate({ name: input }));
  //   setInput("");
  // };

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
            addUser({ name: input });
            setInput("");
          }}
          // onClick={onClick}
        >
          ADD
        </Button>
      </Space>
      {users?.map((user, index) => (
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
