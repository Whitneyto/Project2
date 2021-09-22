import { Button } from 'react-bootstrap';
import { Quote } from '../interfaces/Quote';

export function ControlButton({setQuote} : {setQuote : (q:Quote)=>void}) : JSX.Element {
    return <div className = "side-buttons">
    <Button>Another Background!</Button>
    <Button>Another Quote!</Button>
</div>
}