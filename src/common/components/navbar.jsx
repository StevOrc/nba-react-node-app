import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#01579B" }}
      >
        <div
          className="navbar-brand d-flex flex-row"
          style={{ color: "white", width: "45%" }}
        >
          NBA App
        </div>
        <div
          className="navbar-brand d-flex justify-content-around"
          style={{ color: "white", width: "45%" }}
        >
          <Link
            className="nav-link"
            style={{ color: "white", cursor: "pointer" }}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="/nba-franchises"
            style={{ color: "white", cursor: "pointer" }}
          >
            Franchise
          </Link>
          <Link
            className="nav-link"
            to="/nba-players"
            style={{ color: "white", cursor: "pointer" }}
          >
            Nba Player
          </Link>
          <Link
            className="nav-link"
            to="/nba-players/details/1"
            style={{ color: "white", cursor: "pointer" }}
          >
            Nba Player Details
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
