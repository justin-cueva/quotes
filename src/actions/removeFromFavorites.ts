export default (id: number) => async (dispatch: any, getState: any) => {
  const { userId, isLoggedIn } = getState().auth;

  if (isLoggedIn)
    await fetch(
      `https://quote-generator-8312a-default-rtdb.firebaseio.com/${userId}/${id}.json`,
      { method: "DELETE" }
    );

  dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
};
