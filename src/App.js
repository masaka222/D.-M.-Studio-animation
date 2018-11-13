import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Main from './Main.js';
import Sidebar from './Sidebar.js';

class App extends Component {
  /* State for the Navigation Checkbox */
  state = {
    checked: false
  };

  render() {
    /* Function that toggles the Checkbox */
    const handleManageCheckBox = () => {
      this.setState(()=>({
          checked: !this.state.checked
      }));
    }

    return (
      <div className="App">
        <Navigation 
          checked = {this.state.checked}
          handleManageCheckBox = {handleManageCheckBox}
        />
        <Header/>
        <Main/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
