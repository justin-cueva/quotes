import { Link, useLocation } from "react-router-dom";

import { BsBrightnessHighFill } from "react-icons/bs";
import { useTheme, Theme } from "../hooks/Theme";
import "../styles/Header.css";

const Header = () => {
  const { theme, setTheme } = useTheme();
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

        <Link
          to={"/auth"}
          className="btn--auth col-grey-900"
          onClick={signInHandler}
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
