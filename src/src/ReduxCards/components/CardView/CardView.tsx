import { Space, Typography } from "antd";
import { useSelector } from "react-redux";

import { getCards } from "../../redux/cards";

export const CardView = () => {
  const cards = useSelector(getCards);

  console.log("CardView render");

  return (
    <Space
      wrap
      style={{
        flexDirection: "row",
      }}
    >
      {Object.keys(cards).map((id, index) => (
        <div key={id}>
          <Space wrap>
            <Typography.Text>{cards[+id].title}</Typography.Text>
          </Space>
        </div>
      ))}
    </Space>
  );
};
