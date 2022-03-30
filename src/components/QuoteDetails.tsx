import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "../styles/Quote.css";

import { Quote } from "./QuoteContainer";

interface Props {
  quote: Quote;
}

const QuoteDetails = ({ quote }: Props) => {
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
        <span className="fs-small">{quote.quote}</span>
      </div>
    </div>
  );
};

export default QuoteDetails;
