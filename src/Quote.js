import useRandomQuote from "./useRandomQuote";
import "./Quote.css";

const Quote = () => {
    const quote = useRandomQuote();

    return (
        <div className="quote">
            <h3 className="quote__text" >"{quote.text}"</h3>
            <p className="quote__author" >- {quote.author ? quote.author : "Unknown"}</p>
        </div>
    )
}

export default Quote
