import { createSlice } from "@reduxjs/toolkit";

import { getRandomEmoji } from "../../../../utils/helpers/getRandomEmoji";

type Card = { x: number; y: number; title: string };
type Cards = { [Key in number]: Card };

const createCards = (amount: number) => {
  const cardsArray = Array.from({ length: amount }, (_el, index) => ({
    title: index + " " + getRandomEmoji(),
    x: Math.floor(Math.random() * 1200) + 1,
    y: Math.floor(Math.random() * 1200) + 1,
    id: index,
  }));

  return cardsArray.reduce((acc, card) => {
    acc[card.id] = { x: card.x, y: card.y, title: card.title };
    return acc;
  }, {} as Cards);
};

const ITEMS_AMOUNT = 10;
export const prefix = "cards";
export const cardsSlice = createSlice({
  name: prefix,
  initialState: {
    items: createCards(ITEMS_AMOUNT),
    ids: Array.from({ length: ITEMS_AMOUNT }, (_el, index) => +index++),
  },
  reducers: {
    moveCard(state, action) {
      const { id, x, y } = action.payload;

      state.items[id] = { ...state.items[id], x, y };
    },
  },
});

export const { moveCard } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
