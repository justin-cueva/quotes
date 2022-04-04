import { Quote } from "../types";

export const addToFavorites = (quote: Quote) => {
  return { type: "ADD_TO_FAVORITES", payload: quote };
};

export const removeFromFavorites = (id: number) => {
  return { type: "REMOVE_FROM_FAVORITES", payload: id };
};

export const login = (userId: string) => {
  localStorage.setItem("isLoggedIn", userId);
  return { type: "LOGIN", payload: userId };
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  console.log("removed");
  return { type: "LOGOUT" };
};
