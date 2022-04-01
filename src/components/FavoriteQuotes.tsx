import { connect, ConnectedProps } from "react-redux";
import { Quote } from "../types";
import "../styles/FavoriteQuotes.css";
import { AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { removeFromFavorites } from "../actions/index";

interface RootState {
  favorites: Quote[];
}
console.log("");
const mapState = (state: RootState) => {
  return { favorites: state.favorites };
};
const connector = connect(mapState, { removeFromFavorites });
type PropsFromRedux = ConnectedProps<typeof connector>;

const FavoriteQuotes = (props: PropsFromRedux) => {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    console.log(props.favorites);
  }, [props.favorites]);

  const heartClickHandler = (id: number) => {
    props.removeFromFavorites(id);
  };
  //
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

  return (
    <div className="favorite-quotes__page">
      <div className="favorite-quotes">
        {props.favorites?.length !== 0 ? (
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
        {pageNumber !== 1 && (
          <button className="btn--prev" onClick={previousPageHandler}>
            prev
          </button>
        )}
        {pageNumber !== lastPage && (
          <button className="btn--next" onClick={nextPageHandler}>
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default connector(FavoriteQuotes);
