import React from "react";
import "./app.css";
import logo from "./capsol-logo.png";

//Pages to be rendered in the router
import DisplayPopUps from "../pages/DisplayPopUps/DisplayPopUps";
import DisplayInputFields from "../pages/DisplayInputFields/DisplayInputFields";
//Page to be rendered when routing to a non-existent page
import PageNotFound from '../pages/PageNotFound';

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
          <div>
        <ul>
          <li>
            <Link to="/">Pop Ups</Link>
          </li>
          <li>
            <Link to="/DisplayInputFields">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
            <Switch>
              <Route exact path="/" component={DisplayPopUps} />
              <Route exact path="/DisplayInputFields" component={DisplayInputFields} />
              <Route exact path="/PageNotFound" component={PageNotFound} />
              <Redirect to="/PageNotFound"/>
            </Switch>
           </Router>
        </div>
      </div>
    );
  }
}
