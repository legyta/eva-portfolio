import React, { Component } from "react";
import "../stylesheets/navbar.scss";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/">
                    <a>Home</a>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/work">
                    <a>My work</a>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <a>Get to know me</a>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <a>Let's connect </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
