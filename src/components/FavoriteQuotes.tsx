import { connect, ConnectedProps } from "react-redux";
import { Quote } from "../types";
import "../styles/FavoriteQuotes.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect } from "react";

type RootState = {
  favorites?: Quote[] | undefined;
};
const mapState = (state: RootState) => {
  return { favorites: state?.favorites };
};
const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

const FavoriteQuotes = ({ favorites }: PropsFromRedux) => {
  useEffect(() => {
    console.log(!!favorites?.[0]);
  }, [favorites]);

  return (
    <div className="favorite-quotes">
      {!!favorites?.[0] ? (
        favorites.map((quote: Quote) => {
          return (
            <div className="favorite-quotes__card" key={quote.id}>
              <AiFillHeart className="color-red" />
              <span>{quote.quote}</span>
            </div>
          );
        })
      ) : (
        <p>add some quotes to favorites</p>
      )}
    </div>
  );
};

export default connector(FavoriteQuotes);
