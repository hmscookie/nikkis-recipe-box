import React, { Component } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
