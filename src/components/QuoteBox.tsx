import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function QuoteBox(): JSX.Element {
    return <Row>
        <div className = "quote-area">
            col2
        </div>
        
        <div className = "side-buttons">
            <Button>Another Background Picture!</Button>
            <Button>Another Quote!</Button>
        </div>
    </Row>
}