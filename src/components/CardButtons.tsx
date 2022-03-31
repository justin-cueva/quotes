import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addToFavorites, removeFromFavorites } from "../actions";
import "../styles/CardButtons.css";
import { Quote } from "./QuoteContainer";
import useFetch from "../hooks/useFetch";

const connector = connect(null, { addToFavorites, removeFromFavorites });
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
}) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const newQuoteHandler = async () => {
    setIsFavorited(false);
    const randomQuoteId = Math.floor(Math.random() * 225);
    const fakeId = 300;
    await fetchData(`https://api.adviceslip.com/advice/${randomQuoteId}`);
  };

  const addToFavoriteHandler = () => {
    if (!isFavorited) {
      setIsFavorited(true);
      addToFavorites({ id: quote.slip.id, quote: quote.slip.advice });
    } else {
      setIsFavorited(false);
      removeFromFavorites(quote.slip.id);
    }
  };

  return (
    <div className="buttons">
      <button onClick={newQuoteHandler} className="btn btn--new-quote">
        New Quote
      </button>
      <span
        className={`btn btn--heart-outline`}
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
