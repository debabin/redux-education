import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const getCards = (state: RootState) => {
  return state.cards.ids.map((id) => state.cards.items[id]);
};

export const getCardsIds = (state: RootState) => state.cards.ids;

export const getCardByIdSelector = (state: RootState, id: number) => {
  return state.cards.items[id];
};

// export const getCardByIdSelector = createSelector(getCardsById, (card) => card);

// const getSubjectByID = (state, ownProps) => state.entities[id];
// const subjectByIdSelector = createSelector(getSubjectByID, (subj) => subj);
