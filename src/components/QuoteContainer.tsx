import Quote from "./Quote";
import CardButtons from "./CardButtons";
import "../styles/QuoteContainer.css";

const QuoteContainer = () => {
  return (
    <div className="Quote-Container">
      <Quote />
      <CardButtons />
    </div>
  );
};

export default QuoteContainer;
