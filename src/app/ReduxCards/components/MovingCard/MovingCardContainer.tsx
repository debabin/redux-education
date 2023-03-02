import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCardByIdSelector, moveCard } from "../../redux/cards";
import { MovingCard } from "./MovingCard";

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("@", "mapStateToProps");
  const card = state.cards[ownProps.id];
  return { card };
};

const mapDispatchToProps = (dispatch: any) => {
  console.log("@", "mapDispatchToProps");
  return {
    moveCard: (payload: any) => dispatch(moveCard(payload)),
  };
};

export const MovingCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovingCard);

// container (connect, useSelector) -> card
// createSelector one instance
