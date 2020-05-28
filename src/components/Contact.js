import React from "react";
import "../stylesheets/contact.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import leaf from "../images/leaf.svg";

function Contact() {
  return (
    <div className="contact">
      <Link to="/contact"></Link>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="contact-info">
        <h1>Contact me</h1>

        <div className="contact-phone-email">
          <div className="contact-phone">
            <img src={phone} alt="phone" />
            <p>07969834074</p>
          </div>

          <div className="contact-email">
            <img src={email} alt="email" />
            <p>eva.serra@hotmail.co.uk </p>
          </div>
        </div>
      </div>
      {/* <div className="contact-image">
        <img src={leaf} alt="leaf" />
      </div> */}
      <div className="contact-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
