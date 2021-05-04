import React from "react";
import "./Homepage.css";

export default class Homepage extends React.Component {
  render() {
    return (
      <div class="grid-container">
        <div className="container-1">
            <header>Welcome to CapSol</header>
        </div>
        <div className="About Us">
            <p>
                CapSol is all about the local artists and their pop up music events, 
                scroll through or add your pop up event to let others know about your
                event!
            </p>
        </div>
      </div>
    );
  }
}
