import React from "react";
import "./Homepage.css";

export default class Homepage extends React.Component {
  render() {
    return (
      <div class="grid-container">
        <div className="container-1">
            <h1>Welcome to CapSol</h1>
        </div>
        <div className="About Us">
            <p>
                CapSol is all about the local artists and their pop up music events, 
                scroll through or add your pop up event to let others know about your
                event!
            </p>
        </div>
        <div className="bullet-points">
          <ul>
            <li>Claim a pop-up spot</li>

            <li>Tell people about yout pop-up in a digital CapSol</li>

            <li>Drop your CapSol on a map</li>
            
            <li>Let others discover, join and interact with your CapSol</li>
          </ul>
        </div>
      </div>
    );
  }
}
