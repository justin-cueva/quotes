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
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(props.favorites);
  }, [props.favorites]);

  const heartClickHandler = (id: number) => {
    props.removeFromFavorites(id);
    console.log(props.favorites);
  };
  //
  return (
    <div className="favorite-quotes">
      {props.favorites?.length !== 0 ? (
        props?.favorites?.map((quote: Quote) => {
          return (
            <div className="favorite-quotes__card" key={quote.id}>
              <AiFillHeart
                onClick={() => heartClickHandler(quote.id)}
                className="color-red"
              />
              <span
                onClick={() => {
                  console.log(props.favorites);
                  setCounter((prev) => {
                    return prev + 1;
                  });
                }}
              >
                {quote.quote}
              </span>
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
