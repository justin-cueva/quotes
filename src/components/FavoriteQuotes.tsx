import { connect, ConnectedProps } from "react-redux";
import { Quote, AuthType } from "../types";
import "../styles/FavoriteQuotes.css";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { removeFromFavorites } from "../actions/index";

interface RootState {
  favorites: Quote[];
  auth: AuthType;
}

const mapState = (state: RootState) => {
  return { favorites: state.favorites, auth: state.auth };
};
const connector = connect(mapState, { removeFromFavorites });
type PropsFromRedux = ConnectedProps<typeof connector>;

const FavoriteQuotes = (props: PropsFromRedux) => {
  const [pageNumber, setPageNumber] = useState(1);

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
          <h3>Sign In to save to favorites</h3>
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
          <p>add some quotes to favorites</p>
        )}
      </div>
      <div className="favorite-quotes__pagination">
        {pageNumber !== 1 && favoritesExist && (
          <button className="btn btn--prev" onClick={previousPageHandler}>
            prev
          </button>
        )}
        {pageNumber !== lastPage && favoritesExist && (
          <button className="btn btn--next" onClick={nextPageHandler}>
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default connector(FavoriteQuotes);
