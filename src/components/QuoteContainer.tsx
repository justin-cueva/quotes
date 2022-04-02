import React, { useEffect, useState } from "react";

import QuoteDetails from "./QuoteDetails";
import CardButtons from "./CardButtons";
import "../styles/QuoteContainer.css";
import useFetch from "../hooks/useFetch";
import { useTheme, Theme } from "../hooks/Theme";

const QuoteContainer: React.FC = () => {
  const { theme } = useTheme();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { data, isLoading, error, fetchData } = useFetch(
    "https://api.adviceslip.com/advice"
  );

  const col = theme === Theme.Light ? "bg-grey-100" : "bg-grey-900";

  useEffect(() => {
    if (error?.name === "Error") {
      setErrorMessage(error.message);
    }
    if (error && error?.name !== "Error") {
      setErrorMessage("Something went wrong");
    }
  }, [error]);

  return (
    <div className="container ">
      <div className={`Quote-Container ${col}`}>
        {error ? (
          <p>Error: {errorMessage}</p>
        ) : (
          <QuoteDetails quote={data} isLoading={isLoading} />
        )}
        <CardButtons quote={data} fetchData={fetchData} />
      </div>
    </div>
  );
};

export default QuoteContainer;
