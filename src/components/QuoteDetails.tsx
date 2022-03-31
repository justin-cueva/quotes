import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "../styles/Quote.css";
import { Oval } from "react-loader-spinner";

interface Props {
  quote: any;
  isLoading: boolean;
}

const QuoteDetails = ({ quote, isLoading }: Props) => {
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
      <div className="quote__heading">Quote</div>
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
          <span className="fs-small">
            {quote?.slip?.advice ? quote?.slip?.advice : null}
          </span>
        </div>
      )}
    </div>
  );
};

export default QuoteDetails;
