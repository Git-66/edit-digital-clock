import React from 'react';
import logo from './logo.svg';
import './App.css';
import DigitalClock from './components/DigitalClock';
import EditDigitalClock from './components/EditDigitalClock';

function App() {
  return (
    <div className="App">
      {/* <DigitalClock></DigitalClock> */}
      <EditDigitalClock></EditDigitalClock>
     
    </div>
  );
}

export default App;
