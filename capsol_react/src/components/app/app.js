import React from "react";
import "./app.css";
import logo from "../app/capsol-logo.png";
import SetDateAndTime from "../SetDateAndTime/SetDateAndTime";
import TextInput from "../TextInput/TextInput";
import DisplayInputFields from "../../pages/DisplayInputFields/DisplayInputFields";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="CapSolLogo">
          <img src={logo} alt="logo for capsol"></img>
        </div>
            <div className="DisplayInputField">
                <DisplayInputFields />
            </div>

      </div>
    );
  }
}
