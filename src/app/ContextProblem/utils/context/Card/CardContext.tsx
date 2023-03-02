import React from "react";
import { getRandomEmoji } from "../../../../utils/helpers/getRandomEmoji";

type Card = { x: number; y: number; title: string };
type Cards = { [Key in number]: Card };

const createCards = (amount: number) => {
  const cardsArray = Array.from({ length: amount }, (_el, index) => ({
    title: index + " " + getRandomEmoji(),
    x: Math.floor(Math.random() * 1000) + 1,
    y: Math.floor(Math.random() * 1000) + 1,
    id: index,
  }));

  return cardsArray.reduce((acc, card) => {
    acc[card.id] = { x: card.x, y: card.y, title: card.title };
    return acc;
  }, {} as Cards);
};

interface CardContextParams {
  cards: Cards;
  moveCard: (id: number, x: number, y: number) => void;
}

export const CardContext = React.createContext<CardContextParams>({
  cards: {},
  moveCard: () => {},
});

interface CardProviderProps {
  children: React.ReactNode;
}
export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cards, setCards] = React.useState<Cards>(createCards(1000));

  const moveCard = (id: number, x: number, y: number) => {
    setCards({ ...cards, [id]: { ...cards[id], x, y } });
  };

  const value = React.useMemo(
    () => ({
      cards,
      moveCard,
    }),
    [cards]
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export const useCardById = (id: number) => {
  const { cards, moveCard } = React.useContext(CardContext);
  return { card: { ...cards[id], id }, moveCard };
};

export const useCard = () => React.useContext(CardContext);
