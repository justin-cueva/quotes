import { Quote } from "../types";

export const addToFavorites =
  (quote: Quote) => async (dispatch: any, getState: any) => {
    const { userId, isLoggedIn } = getState().auth;

    if (isLoggedIn) {
      await fetch(
        `https://quote-generator-8312a-default-rtdb.firebaseio.com/${userId}/${quote.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(quote),
        }
      );
    }

    dispatch({ type: "ADD_TO_FAVORITES", payload: quote });
  };

export const removeFromFavorites =
  (id: number) => async (dispatch: any, getState: any) => {
    const { userId, isLoggedIn } = getState().auth;

    if (isLoggedIn)
      await fetch(
        `https://quote-generator-8312a-default-rtdb.firebaseio.com/${userId}/${id}.json`,
        { method: "DELETE" }
      );

    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  };

export const getDataFromFirebase =
  () => async (dispatch: any, getState: any) => {
    const { userId } = getState().auth;
    console.log(userId);
    const response = await fetch(
      `https://quote-generator-8312a-default-rtdb.firebaseio.com/${userId}.json`
    );
    const data = await response.json();
    console.log(data);

    dispatch({ type: "DATA_FROM_FIREBASE", payload: data });
  };

export const login = (userId: string) => async (dispatch: any) => {
  localStorage.setItem("isLoggedIn", userId);
  dispatch({ type: "LOGIN", payload: userId });
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  console.log("removed");
  return { type: "LOGOUT" };
};
