import { Quote } from "../interfaces/Quote";


export function QuoteBox({quote} : {quote:Quote}): JSX.Element {
    return <div className = "quote-area" color="background-color:red">
        <div className = "qte">"{quote.QuoteItem}"</div>
        <div className = "auth">- {quote.Author}</div>      
        </div>
}