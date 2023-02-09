import { Space } from "antd";
import { useSelector } from "react-redux";
import { getCardsIds } from "../../redux/cards";

import { MovingCard } from "../MovingCard/MovingCard";
import { MovingCardContainer } from "../MovingCard/MovingCardContainer";

export const CardList = () => {
  const ids = useSelector(getCardsIds);

  console.log("CardList render");

  return (
    <Space wrap direction="horizontal" style={{ position: "relative" }}>
      {ids.map((id) => (
        <div key={id}>
          {/* <MovingCardContainer id={+id} /> */}
          <MovingCard id={+id} />
        </div>
      ))}
    </Space>
  );
};
