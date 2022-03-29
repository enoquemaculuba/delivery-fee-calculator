import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeliveryFeeCalculator from "./components/DeliveryFeeCalculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DeliveryFeeCalculator/>
      </header>
    </div>
  );
}

export default App;
