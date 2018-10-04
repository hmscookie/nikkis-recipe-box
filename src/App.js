import React, { Component } from 'react';
import Header from './components/Header';
import SignInScreen from './components/SignInScreen';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <SignInScreen />
        </header>
      </div>
    );
  }
}

export default App;
