import React from 'react';
import MyComponent from './MyComponet'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent name="Johan"/>
      </header>
    </div>
  );
}

export default App;
