import { Quote } from "../types";

type FavoritesActions =
  | { type: "ADD_TO_FAVORITES"; payload: string }
  | { type: "REMOVE_FROM_FAVORITES"; payload: number }
  | { type: "DATA_FROM_FIREBASE"; payload: any }
  | { type: "CLEAR_FAVORITES" };

const favoritesReducer = (state: Quote[] = [], action: FavoritesActions) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      const arr = state.filter((quote: Quote) => {
        return quote.id !== action.payload;
      });
      return [...arr];
    case "DATA_FROM_FIREBASE":
      return [...Object.values(action.payload), ...state];
    case "CLEAR_FAVORITES":
      return [];
    default:
      return state;
  }
};

export default favoritesReducer;
