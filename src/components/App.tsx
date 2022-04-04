import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { login as setLogin } from "../actions";
import QuoteContainer from "./QuoteContainer";
import FavoriteQuotes from "./FavoriteQuotes";
import Header from "./Header";
import SignIn from "./Auth";
import "../styles/App.css";
import { ThemeContext, Theme } from "../hooks/Theme";
import { AuthType } from "../types";

function App({ setLogin, auth }: PropsFromRedux) {
  const [theme, setTheme] = useState(Theme.Light);

  useEffect(() => {
    const userId = localStorage.getItem("isLoggedIn");
    if (userId) setLogin(userId);
    console.log(userId);
  }, []);

  return (
    <div
      className={`App ${theme === Theme.Light ? "bg-grey-100" : "bg-grey-800"}`}
    >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<QuoteContainer />} />
            <Route path={"/favorites"} element={<FavoriteQuotes />} />
            {!auth.isLoggedIn && <Route path={"/auth"} element={<SignIn />} />}
            <Route path={"*"} element={<Navigate to={"/"} />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

interface RootState {
  auth: AuthType;
}
const mapStateToProps = (state: RootState) => {
  return { auth: state.auth };
};
const connector = connect(mapStateToProps, { setLogin });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
