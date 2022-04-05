import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Quote, AuthType } from "../types";
import { AiFillHeart } from "react-icons/ai";

import "../styles/FavoriteQuotes.css";
import removeFromFavorites from "../actions/removeFromFavorites";
import { useTheme, Theme } from "../hooks/Theme";

const FavoriteQuotes = (props: PropsFromRedux) => {
  const { theme } = useTheme();
  const [pageNumber, setPageNumber] = useState(1);

  const col = theme === Theme.Light ? "col-grey-800" : "col-grey-100";

  const heartClickHandler = (id: number) => {
    props.removeFromFavorites(id);
  };

  const previousPageHandler = () => {
    setPageNumber((prevPage) => prevPage - 1);
  };

  const nextPageHandler = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const currentPageFavorites = () => {
    const start = (pageNumber - 1) * 6;
    const end = pageNumber * 6;
    const currentPage = props.favorites.slice(start, end);
    return currentPage;
  };

  const lastPage = Math.ceil(props.favorites.length / 6);
  const favoritesExist = props.favorites?.length !== 0;

  return (
    <div className="favorite-quotes__page">
      <div className="favorite-quotes">
        {favoritesExist && !props.auth.isLoggedIn && (
          <h3 className={col}>
            Sign In or Create an Account to save to favorites
          </h3>
        )}
        {favoritesExist ? (
          currentPageFavorites().map((quote: Quote) => {
            return (
              <div className="favorite-quotes__card" key={quote.id}>
                <AiFillHeart
                  onClick={() => heartClickHandler(quote.id)}
                  className="color-red"
                />
                <span>{quote.quote}</span>
              </div>
            );
          })
        ) : (
          <p className={col}>add some quotes to favorites</p>
        )}
      </div>
      <div className="favorite-quotes__pagination">
        {pageNumber !== 1 && favoritesExist && (
          <button
            className="btn btn--prev col-grey-900"
            onClick={previousPageHandler}
          >
            prev
          </button>
        )}
        {pageNumber !== lastPage && favoritesExist && (
          <button
            className="btn btn--next col-grey-900"
            onClick={nextPageHandler}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};

interface RootState {
  favorites: Quote[];
  auth: AuthType;
}

const mapState = (state: RootState) => {
  return { favorites: state.favorites, auth: state.auth };
};
const connector = connect(mapState, { removeFromFavorites });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FavoriteQuotes);
