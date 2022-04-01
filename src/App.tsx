import QuoteContainer from "./components/QuoteContainer";
import FavoriteQuotes from "./components/FavoriteQuotes";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { ThemeContext, Theme } from "./ThemeProvider";

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
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
