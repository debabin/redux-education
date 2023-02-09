import React from "react";
import { Card } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getCardByIdSelector, moveCard } from "../../redux/cards";

interface MovingCardProps {
  id: number;
}

export const MovingCard: React.FC<MovingCardProps> = ({ id }) => {
  const dispatch = useDispatch();
  const card = useSelector((state: any) => getCardByIdSelector(state, id));
  const [pressed, setPressed] = React.useState(false);

  console.log("MovingCard rerender", id);

  return (
    <Card
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseMove={(event) => {
        if (pressed) {
          dispatch(
            moveCard({
              id,
              x: card.x + event.movementX,
              y: card.y + event.movementY,
            })
          );
        }
      }}
      style={{
        zIndex: !!pressed ? 100 : 1,
        cursor: "pointer",
        width: "150px",
        height: "100px",
        backgroundColor: "#B8B8B8",
        fontSize: "20px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: `${card.x}px`,
        top: `${card.y}px`,
        position: "absolute",
      }}
    >
      <p>{card.title}</p>
    </Card>
  );
};
