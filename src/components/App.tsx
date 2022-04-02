import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import QuoteContainer from "./QuoteContainer";
import FavoriteQuotes from "./FavoriteQuotes";
import Header from "./Header";
import SignIn from "./SignIn";
import "../styles/App.css";
import { ThemeContext, Theme } from "../hooks/Theme";

function App() {
  const [theme, setTheme] = useState(Theme.Light);

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
            <Route path={"/signin"} element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
