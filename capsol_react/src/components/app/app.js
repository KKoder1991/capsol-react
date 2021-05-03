import React from "react";
import "./app.css";
import logo from "../app/capsol-logo.png";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="CapSolLogo">
          <img src={logo} alt="logo for capsol"></img>
        </div>

      </div>
    );
  }
}
