import React, { Component } from 'react';
import List from './List/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Just an other TODO-app</h1>
        <List text='' />
      </div>
    );
  }
}

export default App;
