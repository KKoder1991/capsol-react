import React from "react";
import "./app.css";
import logo from "./capsol-logo.png";

//Pages to be rendered in the router
import Homepage from "../pages/Homepage/Homepage";
import DisplayPopUps from "../pages/DisplayPopUps/DisplayPopUps";
import DisplayInputFields from "../pages/DisplayInputFields/DisplayInputFields";
//Page to be rendered when routing to a non-existent page
import PageNotFound from "../pages/PageNotFound";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

export default  class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: false,
      setPage: 3,
    };
  };


  render() {
    return (
      <div className="App">
        <div className="CapSolLogo">
          <img src={logo} alt="logo for capsol"></img>
        </div>
        <div className="DisplayPages">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/PopUps">Pop Ups</Link>
                </li>
                <li>
                  <Link to="/DisplayInputFields">Form</Link>
                </li>
              </ul>
            </div>

            <hr />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/PopUps" component={DisplayPopUps} />
              <Route exact path="/DisplayInputFields" component={DisplayInputFields} />
              <Route exact path="/PageNotFound" component={PageNotFound} />
              <Redirect to="/PageNotFound" />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
