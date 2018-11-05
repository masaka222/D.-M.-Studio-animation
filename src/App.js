import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Sidebar from './Sidebar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
