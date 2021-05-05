import React from "react";
import "./DisplayPopUps.css";

export default class DisplayPopUps extends React.Component {
  render() {
    return (
      <div class="grid-container">
        <div className="container-1">
            <header></header>
        </div>
        <div className="container-1">
            <ul>
                {["420 pop up stream", "Guitar Session/ Mark Makado", "Peruvian Music by Kerridy ensemble", "Lee Borthers and friends playing jazz"]
                .map((events, idx) => { return <li key={idx}>{events}</li>})}
            </ul>
        </div>
      </div>
    );
  }
}
