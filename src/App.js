/** @format */

import React, { Component } from "react";
import Navbar from "./Componant/Navbar";
import News from "./Componant/News";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      text: "dark",
      grey: "darkgrey"
    };
  }

  toggleMode = (e) => {
    e.preventDefault();
    let mode = this.state.text;
    let text = this.state.mode;
    this.setState({
      mode: mode,
      text: text,
    });
  };
  render() {
      document.body.style.background = "grey"
    return (
      <div>
        <Navbar
          toggleMode={this.toggleMode}
          mode={this.state.mode}
          text={this.state.text}
        />
        <div className={`bg-${this.state.mode} text-${this.state.text}`}>
          <News mode={this.state.mode} text={this.state.text} grey={this.state.grey}/>
        </div>
        <img src='logo.svg' alt='' />
      </div>
    );
  }
}

export default App;
