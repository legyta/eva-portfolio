import React, { Component } from "react";
import "../stylesheets/contact.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import leaf from "../images/leaf.svg";
import Form from "./Form";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
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

        <Form env={this.props.env} />

        <div className="contact-image">
          <img src={leaf} alt="leaf" />
        </div>

        <div className="contact-quote">
          <p>
            Going to therapy is like having a personal trainer for your mind.
            It's tailored to you and your needs, it's positive, focused and
            you're supported throughout by your therapist.
          </p>
        </div>

        <div className="button-clients">
          <button className="button">
            {" "}
            <Link to="/" href="#top">
              Back to home
            </Link>
          </button>
        </div>

        <div className="contact-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  env: PropTypes.object.isRequired,
};

export default Contact;
