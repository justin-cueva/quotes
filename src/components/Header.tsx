import { Link, useLocation } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

import { logout } from "../actions";
import { BsBrightnessHighFill } from "react-icons/bs";
import { useTheme, Theme } from "../hooks/Theme";
import "../styles/Header.css";
import { AuthType } from "../types";

interface RootState {
  auth: AuthType;
}
const mapState = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapState, { logout });
type PropsFromRedux = ConnectedProps<typeof connector>;

const Header = ({ auth, logout }: PropsFromRedux) => {
  const { theme, setTheme } = useTheme();
  let { pathname } = useLocation();

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

        {!auth.isLoggedIn && (
          <Link to={"/auth"} className="btn--auth col-grey-900">
            Sign In
          </Link>
        )}
        {auth.isLoggedIn && (
          <button onClick={() => logout()} className="btn--auth col-grey-900">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default connector(Header);
