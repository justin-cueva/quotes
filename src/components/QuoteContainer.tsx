import React, { useEffect, useRef, useState } from "react";

import QuoteDetails from "./QuoteDetails";
import CardButtons from "./CardButtons";
import "../styles/QuoteContainer.css";
import useFetch from "../hooks/useFetch";

export interface Quote {
  id: number;
  quote: string;
}

const QuoteContainer: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { data, isLoading, error, fetchData } = useFetch(
    "https://api.adviceslip.com/advice"
  );

  useEffect(() => {
    if (error?.name === "Error") {
      setErrorMessage(error.message);
    }
    if (error && error?.name !== "Error") {
      setErrorMessage("Something went wrong");
    }
  }, [error]);

  return (
    <div className="Quote-Container">
      {error ? (
        <p>Error: {errorMessage}</p>
      ) : (
        <QuoteDetails quote={data} isLoading={isLoading} />
      )}
      <CardButtons quote={data} fetchData={fetchData} />
    </div>
  );
};

export default QuoteContainer;
