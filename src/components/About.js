import React from "react";
import "../stylesheets/about.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import eva from "../images/eva.JPG";
import Footer from "./Footer";
import cactus from "../images/cactus.svg";

function About() {
  return (
    <div className="about">
      <Link to="/about"></Link>
      <NavBar />
      <div className="about-info">
        <h1>About me</h1>

        <p>Hello there, my name is Eva Serra.</p>
        <p>
          Sometimes it can feel like we are stuck in a bottomless pit, or we
          feel that emotions overwhelm us. We may find our self wanting help
          from others, but at the same time pushing everyone away.
        </p>
        <p>
          Sometimes the mirrors we get are not constructive, or can even be
          damaging, and we have no idea how to change our internal self critic.
        </p>
        <p>
          Working together to challenge (with love) our decisions and our
          behaviours, can transform patterns we thought defined us.
        </p>

        <img src={eva} alt="eva" />
        <p>
          I Work within the BACP Ethical Framework. I am a BACP registered
          Integrative Psychotherapist/Counselor. The Integrative approach allows
          the sessions to be uniquely tailored to you, this approach brings
          tools from different approaches in to a relational based style.
        </p>

        <div className="about-image">
          <img src={cactus} alt="cactus" />
        </div>

        <p>
          "Anxiety: when our body can't cope with the situation only happening
          in our mind"
        </p>
      </div>
      <div className="footer">
        <div className="about-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
