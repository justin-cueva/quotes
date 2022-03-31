import { combineReducers } from "redux";

import { Quote } from "../types";

type Actions =
  | { type: "ADD_TO_FAVORITES"; payload: string }
  | { type: "REMOVE_FROM_FAVORITES"; payload: number };

const favoritesReducer = (state: Quote[] = [], action: Actions) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      return state.filter((quote: Quote) => {
        return quote.id !== action.payload;
      });
    default:
      return state;
  }
};

export default combineReducers({ favorites: favoritesReducer });
