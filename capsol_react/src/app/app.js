import React from "react";
import "./app.css";
import logo from "./capsol-logo.png";

//Pages to be rendered in the router
import DisplayPopUps from "../pages/DisplayPopUps/DisplayPopUps";
import DisplayInputFields from "../pages/DisplayInputFields/DisplayInputFields";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: false,
      setPage: 3
    }
  }
  render() {
    return (
      <div className="App">
        <div className="CapSolLogo">
          <img src={logo} alt="logo for capsol"></img>
        </div>
        <div className="DisplayPages">
          <Router>
            <Switch>
              <Redirect to="/404"/>
              <Route exact path="/" component={DisplayInputFields} />
              <Route component={DisplayPopUps} />
            </Switch>
           </Router>
        </div>
      </div>
    );
  }
}
