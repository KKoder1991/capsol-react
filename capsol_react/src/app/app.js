import React from "react";
import "./app.css";
import logo from "./capsol-logo.png";
import SetDateAndTime from "../components/SetDateAndTime/SetDateAndTime";
import TextInput from "../components/TextInput/TextInput";
import DisplayInputFields from "../pages/DisplayInputFields/DisplayInputFields";

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
