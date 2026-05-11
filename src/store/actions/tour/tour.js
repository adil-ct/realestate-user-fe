import {
  SET_TOUR_HOVER_CARD_INDEX,
  SET_TOUR_PROPERTY_ID,
  SET_TOUR_HOVER_CARD,
} from "store/actionLabels";

export const setTourHoverCard = (payload) => ({
  type: SET_TOUR_HOVER_CARD,
  payload,
});

export const setTourHoverCardIndex = (payload) => ({
  type: SET_TOUR_HOVER_CARD_INDEX,
  payload,
});

export const setTourPropertyId = (payload) => ({
  type: SET_TOUR_PROPERTY_ID,
  payload,
});
