import { Quote } from "../interfaces/Quote";

export function QuoteBox({quote} : {quote:Quote}): JSX.Element {
    return <div className = "quote-area">
            {quote.QuoteItem}
        </div>
}