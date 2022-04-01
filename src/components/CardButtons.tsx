import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addToFavorites, removeFromFavorites } from "../actions/index";
import "../styles/CardButtons.css";
import { Quote } from "../types";

interface RootState {
  favorites: Quote[];
}
const mapStateToProps = (state: RootState) => {
  return { favorites: state.favorites };
};
const connector = connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
});

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  quote: any;
  fetchData: (url: string) => Promise<void>;
};

const CardButtons: React.FC<Props> = ({
  addToFavorites,
  quote,
  fetchData,
  removeFromFavorites,
  favorites,
}) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const newQuoteHandler = async () => {
    setIsFavorited(false);
    const randomQuoteId = Math.floor(Math.random() * 225);

    await fetchData(`https://api.adviceslip.com/advice/${randomQuoteId}`);

    const isInFavorites = favorites.some((quote) => {
      return randomQuoteId === quote.id;
    });
    if (isInFavorites) {
      setIsFavorited(true);
    }
  };

  const addToFavoriteHandler = () => {
    if (!isFavorited) {
      setIsFavorited(true);
      addToFavorites({ id: quote.id, quote: quote.quote });
    } else {
      setIsFavorited(false);
      removeFromFavorites(quote.id);
    }
  };

  return (
    <div className="buttons">
      <button onClick={newQuoteHandler} className="btn btn--new-quote">
        New Quote
      </button>
      <span
        className={`btn--heart-outline`}
        onClick={() => {
          addToFavoriteHandler();
        }}
      >
        {isFavorited ? (
          <AiFillHeart className="color-red" />
        ) : (
          <AiOutlineHeart />
        )}
      </span>
    </div>
  );
};

export default connector(CardButtons);
