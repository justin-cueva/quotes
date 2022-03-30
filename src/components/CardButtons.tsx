import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/CardButtons.css";

import { Quote } from "./QuoteContainer";

interface Props {
  setQuote: React.Dispatch<React.SetStateAction<Quote>>;
}

const CardButtons: React.FC<Props> = ({ setQuote }) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const newQuoteHandler = async () => {
    try {
      const response = await fetch("	https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      const { advice } = slip;

      setQuote({ quote: advice, id: slip.id });
    } catch (error) {
      console.error(error);
    }
  };

  const favoriteHandler = () => {
    console.log("adding to favorites..");
    setIsFavorited((prevState) => (prevState ? false : true));
  };

  return (
    <div className="buttons">
      <button onClick={newQuoteHandler} className="btn btn--new-quote">
        New Quote
      </button>
      <span className={`btn btn--heart-outline`} onClick={favoriteHandler}>
        {isFavorited ? (
          <AiFillHeart className="color-red" />
        ) : (
          <AiOutlineHeart />
        )}
      </span>
    </div>
  );
};

export default CardButtons;
