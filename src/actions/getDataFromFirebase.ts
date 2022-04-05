export default () => async (dispatch: any, getState: any) => {
  const { userId } = getState().auth;
  console.log(userId);
  const response = await fetch(
    `https://quote-generator-8312a-default-rtdb.firebaseio.com/${userId}.json`
  );
  const data = await response.json();

  if (data) dispatch({ type: "DATA_FROM_FIREBASE", payload: data });
};
