import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-we"> 
            <span> W </span>
            <span> E </span> 
        </div>

        <div className="main-line"></div>

        <div className="main-are"> 
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