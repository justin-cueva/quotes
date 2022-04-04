import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import getDataFromFirebase from "../actions/getDataFromFirebase";
import login from "../actions/login";
import QuoteContainer from "./QuoteContainer";
import FavoriteQuotes from "./FavoriteQuotes";
import Header from "./Header";
import Auth from "./Auth";
import "../styles/App.css";
import { ThemeContext, Theme } from "../hooks/Theme";
import { AuthType } from "../types";

function App({ login, auth, getDataFromFirebase }: PropsFromRedux) {
  const [theme, setTheme] = useState(Theme.Light);

  const init = async () => {
    try {
      const userId = localStorage.getItem("isLoggedIn");
      if (userId) await login(userId);
      if (userId) await getDataFromFirebase();
      console.log(userId);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    init();
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
            {!auth.isLoggedIn && <Route path={"/auth"} element={<Auth />} />}
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
const connector = connect(mapStateToProps, { login, getDataFromFirebase });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
