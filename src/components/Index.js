import React from "react";
import "../stylesheets/index.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import leaf from "../images/leaf.svg";
import beach from "../images/beach.JPG";
import { Component } from "react";
import Clients from "./Clients";
import TherapyTypes from "./TherapyTypes";
import HelpWith from "./HelpWith";

class Index extends Component {
  state = {
    isClientsMounted: false,
    isTherapyMounted: false,
    isHelpMounted: false,
    response: false,
  };
  toggleClients = () => {
    this.setState({
      isClientsMounted: !this.state.isClientsMounted,
    });
  };

  toggleTherapy = () => {
    this.setState({
      isTherapyMounted: !this.state.isTherapyMounted,
    });
  };

  toggleHelp = () => {
    this.setState({
      isHelpMounted: !this.state.isHelpMounted,
    });
  };
  render() {
    return (
      <div className="index-page">
        <Link to="home"></Link>
        <NavBar />
        <div className="index-title">
          <div className="index-format">
            <div className="index-name-title">
              <h1>Eva Serra</h1>
              <h2>Integrative psychotherapist</h2>
            </div>

            <div className="index-image-beach">
              <img src={beach} alt="beach" />
            </div>
          </div>

          <div className="beach-title">
            <h2>Remembering the home within us</h2>
          </div>

          <div className="button-clients">
            <button className="button">
              <Link to="contact">Make an appointment</Link>
            </button>
          </div>

          <div>
            <h2>BACP & UKCP Acredited/Registered</h2>
          </div>

          <div className="button-clients">
            <button className="button" onClick={this.toggleHelp}>
              I can help with
            </button>
          </div>
          <div className="clients-info">
            {this.state.isHelpMounted ? (
              <div className="read">
                <HelpWith />{" "}
              </div>
            ) : null}
          </div>

          <div className="button-clients">
            <button className="button" onClick={this.toggleTherapy}>
              Therapy types
            </button>
          </div>
          <div className="clients-info">
            {this.state.isTherapyMounted ? (
              <div className="read">
                <TherapyTypes />{" "}
              </div>
            ) : null}
          </div>
          <div className="index-image">
            <img src={leaf} alt="leaf" />
          </div>

          <div className="button-clients">
            <button className="button" onClick={this.toggleClients}>
              My clients
            </button>
          </div>
          <div className="clients-info">
            {this.state.isClientsMounted ? (
              <div className="read">
                <Clients />{" "}
              </div>
            ) : null}
          </div>
        </div>
        <div className="index-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Index;
