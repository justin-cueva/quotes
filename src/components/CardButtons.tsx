import { AiOutlineHeart } from "react-icons/ai";
import "../styles/CardButtons.css";

const CardButtons = () => {
  return (
    <div className="buttons">
      <button className="btn btn--new-quote">New Quote</button>
      <span className="btn btn--heart-outline">
        <AiOutlineHeart />
      </span>
    </div>
  );
};

export default CardButtons;
