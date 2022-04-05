import { Quote } from "../types";

export default (userId: string) => async (dispatch: any, getState: any) => {
  const favorites = getState().favorites;

  if (favorites) {
    favorites.forEach(async (fav: Quote) => {
      await fetch(
        `https://quote-generator-8312a-default-rtdb.firebaseio.com/${userId}/${fav.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(fav),
        }
      );
    });
  }

  const response = await fetch(
    `https://quote-generator-8312a-default-rtdb.firebaseio.com/${userId}.json`
  );
  const data = await response.json();
  localStorage.setItem("isLoggedIn", userId);
  if (data) dispatch({ type: "DATA_FROM_FIREBASE", payload: data });

  dispatch({ type: "LOGIN", payload: userId });
};
