import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main className="container">
        <Calculator />
      </main>
    );
  }
}

export default App;
