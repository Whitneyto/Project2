import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Prompt } from './components/Prompt';
import { SwapButton } from './components/SwapButton';

function App() {
  const [prompt, setPrompt] = useState<string>("Text-trial");

  return (
    <div className="App">
      <div>
        <Prompt text = {prompt}></Prompt>
        <SwapButton></SwapButton>
      </div>
    </div>
  );
}

export default App;
