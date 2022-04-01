import { combineReducers } from "redux";

import { Quote } from "../types";

type Actions =
  | { type: "ADD_TO_FAVORITES"; payload: string }
  | { type: "REMOVE_FROM_FAVORITES"; payload: number };

const favoritesReducer = (
  state: Quote[] = [
    {
      id: 3001,
      quote:
        "Don't assume anything is possible or impossible until you've asked the people who will be doing the work.",
    },
    {
      id: 3002,
      quote:
        "Don't assume anything is possible or impossible until you've asked the people who will be doing the work.",
    },
    {
      id: 3003,
      quote:
        "Don't assume anything is possible or impossible until you've asked the people who will be doing the work.",
    },
    {
      id: 3004,
      quote:
        "Don't assume anything is possible or impossible until you've asked the people who will be doing the work.",
    },
    {
      id: 30045,
      quote:
        "Don't assume anything is possible or impossible until you've asked the people who will be doing the work.",
    },
    {
      id: 3006,
      quote:
        "Don't assume anything is possible or impossible until you've asked the people who will be doing the work.",
    },
    {
      id: 3007,
      quote:
        "Don't assume anything is possible or impossible until you've asked the people who will be doing the work.",
    },
  ],
  action: Actions
) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      const arr = state.filter((quote: Quote) => {
        return quote.id !== action.payload;
      });
      console.log(arr === [...arr]);
      return [...arr];
    default:
      return state;
  }
};

export default combineReducers({ favorites: favoritesReducer });
