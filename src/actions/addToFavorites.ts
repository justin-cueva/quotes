import { Quote } from "../types";

export default (quote: Quote) => async (dispatch: any, getState: any) => {
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
