type AuthActions = { type: "LOGIN"; payload: string } | { type: "LOGOUT" };

const authReducer = (
  state = { isLoggedIn: false, userId: "" },
  action: AuthActions
) => {
  switch (action.type) {
    case "LOGIN":
      return { isLoggedIn: true, userId: action.payload };
    case "LOGOUT":
      return { isLoggedIn: false, userId: "" };
    default:
      return state;
  }
};

export default authReducer;
