import React, { useState } from 'react';
import './App.css';
import QUOTES from './assets/quoteList.json';
import { HeaderBar} from './components/HeaderBar'
import { QuoteBox } from './components/QuoteBox';
import { ControlQuoteButton } from './components/ControlQuoteButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Quote} from './interfaces/Quote';

function App() {
  const [seeQuote , setSeeQuote] = useState<Quote>(QUOTES[Math.floor(Math.random() * QUOTES.length)])

  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <div className ="title">
        <h1>Random Motivational Quote!!!</h1>        
      </div>
        <QuoteBox quote = {seeQuote}></QuoteBox>
        <ControlQuoteButton setQuote = {setSeeQuote}></ControlQuoteButton>
    </div>
  );
}

export default App;
