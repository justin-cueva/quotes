import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs";

import "../styles/Header.css";

const Header = () => {
  let { pathname } = useLocation();
  const [theme, setTheme] = useState<string>("light");

  const toggleThemeHandler = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  const signInHandler = () => {
    console.log("signing in...");
  };

  const themeIcon =
    theme === "light" ? (
      <BsBrightnessHighFill className="icon--theme" />
    ) : (
      <BsBrightnessHigh className="icon--theme" />
    );

  return (
    <header className="header ">
      <span onClick={toggleThemeHandler} className="btn--theme">
        {themeIcon}
      </span>

      <div className="header__right ">
        {pathname === "/favorites" ? (
          <Link className="link--favorites color-black" to={"/"}>
            Search
          </Link>
        ) : (
          <Link className="link--favorites color-black" to={"/favorites"}>
            Favorites
          </Link>
        )}

        <button className="btn--auth" onClick={signInHandler}>
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
