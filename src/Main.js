import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-we" id="we-text"> 
            <span> W </span>
            <span> E </span> 
        </div>

        <div className="main-line" id="line-text">
          <span className="main-line__text">D . M . S T U D I O </span> 
        </div>

        <div className="main-are" id="are-text"> 
            <span>A</span>
            <span>R</span>
            <span>E</span>
        </div>

        <div className="main-about" id="about-text"> 
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
        </div>
        
        <div className="main-experiences" id="experiences-text">
            <span>E</span>
            <span>X</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>I</span>
            <span>E</span>
            <span>N</span>
            <span>C</span>
            <span>E</span>
            <span>S</span>
        </div>
      </div>
    );
  }
}

export default Main;