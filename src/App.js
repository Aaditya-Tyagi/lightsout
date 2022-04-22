import React, { Component } from "react";
import Board from "./Board";
import "./App.css";
import img1 from "./lightsoutbg2.jpg"

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board/>
      </div>
    );
  }
}

export default App;
// style={{ backgroundImage :`url(${img1})`}}