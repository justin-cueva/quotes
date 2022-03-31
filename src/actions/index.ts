import { Quote } from "../components/QuoteContainer";

export const addToFavorites = (quote: Quote) => {
  return { type: "ADD_TO_FAVORITES", payload: quote };
};

export const removeFromFavorites = (id: number) => {
  return { type: "REMOVE_FROM_FAVORITES", payload: id };
};
