import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    /* 
      The function ani() is used to make all the necessary animations on the right time,
      after the press of the button. How it makes that happen, is by putting different "animated"
      classes to specific elements by ID, in a specific timeframe
    */
    function ani(){
      
    }

    return (
      <div className="header">
        <p className="header-text"> D . M . S T U D I O </p>
        <button className="header-button" onClick={ani}>
          <div className="navigation-background" id="nav-background">&nbsp;</div>
        </button>
      </div>
    );
  }
}

export default Header;