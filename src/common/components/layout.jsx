import React, { Component } from "react";
import { Footer, NavBar } from "../../common";
import { NbaPlayersContainer, FranchisesContainer } from "../../features";
import { Switch, Route, Redirect } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route path="/nba-players" component={NbaPlayersContainer}></Route>
            <Route
              path="/nba-franchises"
              component={FranchisesContainer}
            ></Route>
            <Redirect from="/" exact to="/nba-players"></Redirect>
            <Redirect to="/nba-players"></Redirect>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
