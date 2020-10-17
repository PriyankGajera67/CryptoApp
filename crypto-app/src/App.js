import React from 'react';
import logo from './logo.svg';
import './App.css';

var ccxt = require ('ccxt')

function App() {
  var test = new ccxt.kraken (); // print all available exchanges
  console.log( test.loadMarkets () );
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
