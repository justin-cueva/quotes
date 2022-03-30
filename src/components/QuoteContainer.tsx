import React, { useEffect, useState } from "react";

import QuoteDetails from "./QuoteDetails";
import CardButtons from "./CardButtons";
import "../styles/QuoteContainer.css";

export interface Quote {
  id: number;
  quote: string;
}

const QuoteContainer: React.FC = () => {
  const [quote, setQuote] = useState<Quote>({
    id: 99999,
    quote: `Don't ever name files or folders using the word \"Final\".`,
  });

  useEffect(() => {
    console.log(quote);
  }, [quote]);

  return (
    <div className="Quote-Container">
      <QuoteDetails quote={quote} />
      <CardButtons setQuote={setQuote} />
    </div>
  );
};

export default QuoteContainer;
