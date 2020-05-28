import React from "react";
import "../stylesheets/index.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import leaf from "../images/leaf.svg";

function Index() {
  return (
    <div className="index-page">
      <Link to="home"></Link>
      <NavBar />
      <div className="index-title">
        <div className="index-name-title">
          <h1>Eva Serra</h1>
          <h2>Child, adolescent and adult psychotherapist</h2>
        </div>
        <div className="index-image">
          <img src={leaf} alt="leaf" />
        </div>
      </div>
      <div className="index-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Index;
