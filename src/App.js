import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [style, setStyle] = useState('red')
  const [input, setInput] = useState('red')
  console.log(input);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Use the input fields to change the styles below
        </p>
        <p
          style={{ color: style }}
        >
          Learn React XSS
        </p>
        <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
        <button onClick={() => setStyle(input)}>Enter</button>
      </header>
    </div>
  );
}

export default App;
