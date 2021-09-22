import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import QUOTES from './assets/quoteList.json';
import { QuoteBox } from './components/QuoteBox';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [quote, setQuote] = useState<Quote>("Text-trial");

  return (
    <div className="App">
      <div>
        <h1>Some Big Texts here</h1>
        <p>Some small texts here</p>
      </div>
      <Container>
        <QuoteBox></QuoteBox>
      </Container>
    </div>
  );
}

export default App;
