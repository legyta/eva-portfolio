import React from "react";
import "../stylesheets/about.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import evaTwo from "../images/evaTwo.JPG";
import Footer from "./Footer";
import cactus from "../images/cactus.svg";
import leaf from "../images/leaf.svg";

function About() {
  return (
    <div className="about">
      <Link to="/about"></Link>
      <NavBar />
      <div className="about-info">
        <h1>About me</h1>

        <p>
          Having worked as a Psychotherapist/Counsellor for the last Six years,
          in an integrative/person centered way has helped create core values,
          putting clients at the center, in a target driven environment whatever
          age the clients may be.
        </p>
        <p>
          Born and raised in Devon to creative and daring parents neither of
          whom from the UK, almost immediately following my passion in the never
          ending journey of discovering/ understanding what it is to be human
          for me and others, has meant I have an innate joy and curiosity for
          the ever evolving expression of the diverse experience of being on
          this earth together.
        </p>

        <div className="about-image">
          <img src={leaf} alt="leaf" />
        </div>

        <p>
          I started out doing the level four diploma with CPTA in adult
          integrative counselling, then on to the BACP registered BA in
          Integrative counselling while working for the NHS as a Wellbeing
          Practitioner.
        </p>
        <p>
          The NHS being an extremely vital learning for me, as well as a
          relaisation at the importance of giving more time and sessions to
          clients and space to the therapist to truly hold the client in mind. I
          realised the importance of working with younger clients, due to the
          amount of people struggling with messages they received in childhood.
          This is when I started the MA in child and adolescent psychotherapy,
          enabling children to acquire the tools within them that they will need
          in the inevitable difficulties life brings. I am working with EFT
          (emotional freedom technique) the concept of self-love can completely
          transform someone's self-perception. I am a believer in re-programming
          how we think, and I believe compassion is the most effective tool.
        </p>

        <img src={evaTwo} alt="eva" />
        <p>
          My career as a therapist is not just a career for me, but a life
          choice. meaning I am continually looking at my own states of
          transference, noticing if I am communicating with honesty and respect
          and continually striving for self-awareness.
        </p>

        <div className="about-image">
          <img src={cactus} alt="cactus" />
        </div>
      </div>

      <div className="button-clients">
        <button className="button">
          {" "}
          <Link to="/">Back to home</Link>
        </button>
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
