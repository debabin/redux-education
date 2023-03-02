import { Space, Typography } from "antd";

import { useCard } from "../../utils/context/Card/CardContext";

export const CardView = () => {
  const { cards } = useCard();

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
