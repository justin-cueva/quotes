import { useState, useEffect } from "react";
import { Quote } from "../types";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Quote>();
  const [error, setError] = useState<any>();

  const fetchData = async (url: string) => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.message?.type === "error") {
        throw new Error(`${data.message.text}`);
      }

      setData({ id: data.slip.id, quote: data.slip.advice });
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { isLoading, data, error, fetchData, setError };
};

export default useFetch;
