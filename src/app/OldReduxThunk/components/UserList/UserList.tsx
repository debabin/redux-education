import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Space, Typography } from "antd";

import {
  getUserData,
  getUserPending,
  getUserError,
} from "../../redux/user/selectors";
import { fetchUsers } from "../../redux/user/thunks";
import { useAppDispatch } from "../../redux/store";

export const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(getUserData);
  const loading = useSelector(getUserPending);
  const error = useSelector(getUserError);

  useEffect(() => {
    dispatch(fetchUsers()).then(() => console.log("end"));
  }, []);

  if (loading) {
    return <Typography.Text>loading</Typography.Text>;
  }

  if (error) {
    return <Typography.Text>failed</Typography.Text>;
  }

  return (
    <Space wrap direction="vertical">
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
