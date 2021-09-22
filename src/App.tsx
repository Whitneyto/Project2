import React, { useState } from 'react';
import './App.css';
import QUOTES from './assets/quoteList.json';
import { QuoteBox } from './components/QuoteBox';
import { ControlButton } from './components/ControlButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Quote} from './interfaces/Quote';

function App() {
  const [seeQuote , setSeeQuote] = useState<Quote>(QUOTES[0] as Quote)

  return (
    <div className="App">
      <div>
        <h1>Some Big Texts here</h1>
        <p>Some small texts here</p>
        
      </div>
        <QuoteBox quote = {seeQuote}></QuoteBox>
        <ControlButton setQuote = {setSeeQuote}></ControlButton>
    </div>
  );
}

export default App;
