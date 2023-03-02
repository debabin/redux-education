import React from "react";
import { Card } from "antd";

import { useCardById } from "../../utils/context/Card/CardContext";

interface MovingCardProps {
  id: number;
}

export const MovingCard: React.FC<MovingCardProps> = ({ id }) => {
  const { card, moveCard } = useCardById(id);
  const [pressed, setPressed] = React.useState(false);

  console.log("MovingCard rerender", card.id);

  return (
    <Card
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseMove={(event) => {
        if (pressed) {
          moveCard(card.id, card.x + event.movementX, card.y + event.movementY);
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
