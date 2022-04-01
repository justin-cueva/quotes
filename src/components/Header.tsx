import { Link, useLocation } from "react-router-dom";
import { BsBrightnessHighFill } from "react-icons/bs";
import { useTheme, Theme } from "../ThemeProvider";

import "../styles/Header.css";

const Header = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  let { pathname } = useLocation();

  const signInHandler = () => {
    console.log("signing in...");
  };

  const themeIcon =
    theme === Theme.Dark ? (
      <BsBrightnessHighFill
        className={`icon--theme col-light`}
        onClick={() => setTheme(Theme.Light)}
      />
    ) : (
      <BsBrightnessHighFill
        className="icon--theme col-dark"
        onClick={() => setTheme(Theme.Dark)}
      />
    );

  return (
    <header className="header">
      <span className="btn--theme">{themeIcon}</span>
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
