import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Homes from './components/Homes';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header/>
      <Homes/>
    </div>
  );
}

export default App;
