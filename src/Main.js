import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <p className="main-we"> <span> W </span><span> E </span> </p>
        <p className="main-line"></p>
        <p className="main-are"> <span>A</span><span>R</span><span>E</span></p>
        <p className="main-about" id="about-text"> 
        <span>A</span><span>B</span><span>O</span><span>U</span><span>T</span>
        </p>
        <p className="main-experiences" id="experiences-text">
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
        </p>
      </div>
    );
  }
}

export default Main;