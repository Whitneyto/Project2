import '../App.css';
import { Button } from 'react-bootstrap';
import { Quote } from '../interfaces/Quote';
import QUOTES from '../assets/quoteList.json';


export function ControlQuoteButton({setQuote} : {setQuote : (q:Quote)=>void}) : JSX.Element {
    return <div className = "side-buttons">
    <Button className ="quote-change" variant="secondary" onClick = {
        ()=>setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]) 
    }>Another Quote!</Button>
</div>
}