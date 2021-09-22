import { Quote } from "../interfaces/Quote";
import '../App.css';

export function QuoteBox({quote} : {quote:Quote}): JSX.Element {
    return <div className = "quote-area">
        <div className = "qte">" {quote.QuoteItem} "</div>
        <div className = "auth">- {quote.Author}</div>      
        </div>
}