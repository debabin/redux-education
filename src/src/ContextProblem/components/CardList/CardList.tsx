import { Space, Typography } from "antd";

import { useCard } from "../../utils/context/Card/CardContext";
import { MovingCard } from "../MovingCard/MovingCard";

export const CardList = () => {
  const { cards } = useCard();

  console.log("CardList render");

  return (
    <Space wrap direction="horizontal" style={{ position: "relative" }}>
      {Object.keys(cards).map((id) => (
        <div key={id}>
          <MovingCard id={+id} />
        </div>
      ))}
    </Space>
  );
};
