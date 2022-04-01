import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "../styles/Quote.css";
import { Oval } from "react-loader-spinner";
import { Quote } from "../types";
import { useTheme, Theme } from "../ThemeProvider";

interface Props {
  quote: Quote | undefined;
  isLoading: boolean;
}

const QuoteDetails = ({ quote, isLoading }: Props) => {
  const { theme } = useTheme();

  const color = theme === Theme.Light ? "col-grey-900" : "col-grey-100";

  const loadingSpinner = (
    <div className="quote">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="#000"
        secondaryColor="white"
      />
    </div>
  );

  return (
    <div className="quote">
      <div className={`quote__heading ${color}`}>Quote</div>
      {isLoading ? (
        loadingSpinner
      ) : (
        <div className="quote__quote">
          <span className="icon__left">
            <FaQuoteLeft />
          </span>
          <span className="icon__right">
            <FaQuoteRight />
          </span>
          <span className={`fs-small ${color}`}>
            {quote?.quote ? quote.quote : null}
          </span>
        </div>
      )}
    </div>
  );
};

export default QuoteDetails;
