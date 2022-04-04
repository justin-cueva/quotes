import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import "../styles/CardButtons.css";
import { addToFavorites, removeFromFavorites } from "../actions/index";
import { Quote } from "../types";
import { useTheme, Theme } from "../hooks/Theme";

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
  const { theme } = useTheme();
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

  const heartBtnColor = theme === Theme.Light ? "col-grey-900" : "col-grey-100";

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
      <button
        onClick={newQuoteHandler}
        className="btn btn--new-quote bg-grey-medium col-grey-900"
      >
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
          <AiOutlineHeart className={heartBtnColor} />
        )}
      </span>
    </div>
  );
};

export default connector(CardButtons);
