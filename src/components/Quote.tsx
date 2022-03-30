import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "../styles/Quote.css";

const Quote = () => {
  return (
    <div className="quote">
      <div className="quote__heading">Quote</div>
      <div className="quote__quote">
        <span className="icon__left">
          <FaQuoteLeft />
        </span>
        <span className="icon__right">
          <FaQuoteRight />
        </span>
        <span className="fs-small">
          Your time is limited, so don't waste it living someone else's life.
          Don't be trapped by dogma which is living with the results of other
          people's thinking.
        </span>
      </div>
      <span className="quote__author fs-small">Steve Jobs</span>
    </div>
  );
};

export default Quote;
