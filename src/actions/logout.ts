export default () => async (dispatch: any) => {
  localStorage.removeItem("isLoggedIn");
  console.log("removed");
  dispatch({ type: "LOGOUT" });
  dispatch({ type: "CLEAR_FAVORITES" });
};
