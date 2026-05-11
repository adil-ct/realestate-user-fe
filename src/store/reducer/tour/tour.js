import {
  SET_TOUR_HOVER_CARD_INDEX,
  SET_TOUR_PROPERTY_ID,
  SET_TOUR_HOVER_CARD,
} from "store/actionLabels";

export const initialState = {
  tourHoverCardIndex: 0,
  showHoverCard: false,
  propertyId: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOUR_HOVER_CARD:
      return {
        ...state,
        showHoverCard: payload,
      };
    case SET_TOUR_PROPERTY_ID:
      return {
        ...state,
        propertyId: payload,
      };
    case SET_TOUR_HOVER_CARD_INDEX:
      return {
        ...state,
        tourHoverCardIndex: payload,
      };
    default:
      return state;
  }
};
