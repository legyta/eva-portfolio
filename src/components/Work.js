import React, { Component } from "react";
import "../stylesheets/work.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import cactus from "../images/cactus.svg";
import leaf from "../images/leaf.svg";
//import Clients from "./Clients";
//import TherapyTypes from "./TherapyTypes";
import HelpWith from "./HelpWith";

class Work extends Component {
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
      <div className="work">
        <Link to="/work"></Link>
        <NavBar />
        <div className="work-info">
          <h1>How I work</h1>
          <p>
            I Work within the BACP/UKCP Ethical Framework as a registered member
            of the BACP/UKCP, specialising in working with children and
            adolescence as an Integrative psychotherapist.{" "}
          </p>
          <p>
            I Offer long-term and short-term face-to-face and online sessions.
            Our appointments are weekly, at the time we agree together.The
            appointments last 50 minutes, these appointments are confidential
            and led by You.
          </p>
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
          {/* <div className="clients-info">
            {this.state.isClientsMounted ? (
              <div className="read">
                <Clients />{" "}
              </div>
            ) : null}
          </div> */}
          {/* <div className="button-clients">
            <button className="button" onClick={this.toggleClients}>
              My clients
            </button>
          </div> */}
          <div className="work-image">
            <img src={leaf} alt="leaf" />
          </div>
          <h1>Therapeutic approach</h1>
          <p>
            As an integrative therapist, I integrate a lot of different
            modalities in to the work. This can take the form of a more physical
            grounded expression of emotion, or we may work with letter writing
            and inner child work. Primarily this is your space and you can share
            what is important to you right now, as now is all there really is.{" "}
          </p>
          <p>
            The past can dictate how we re-act to a brand new situation in the
            present, this is where empty chair work and narrative therapy is
            useful. Sometimes when we start feeling “things” for the first time,
            therapy can feel more painful before we feel more free and able to
            cope.{" "}
          </p>
          {/* <div className="button-clients">
            <button className="button" onClick={this.toggleTherapy}>
              Therapy types
            </button>
          </div> */}
          {/* <div className="clients-info">
            {this.state.isTherapyMounted ? (
              <div className="read">
                <TherapyTypes />{" "}
              </div>
            ) : null}
          </div> */}
          <div className="work-image">
            <img src={cactus} alt="cactus" />
          </div>
          <p>
            I am aware that sometimes we don’t want people to know we are in
            therapy, and sometimes we just want one thing that is private to
            us.I am also aware this can change from day to day. And also
            sometimes seeing a therapist can remind us of emotions we don’t want
            to feel in that moment. For this reason my policy is that if I see
            you outside I wont say “hello” unless you say hello to me.{" "}
          </p>
          <p>
            I believe that creativity, especially painting clay work and sand
            tray give us direct access to the unconscious. Through these mediums
            we can explore very painful topics safely/creatively and bring in a
            third element to the work, putting less pressure on words and having
            to speak to a complete stranger.{" "}
          </p>
          <p>
            Sometimes the mirrors we receive are painful, or even damaging and
            we have no idea how to change our internal self critic. Working
            together to challenge (with love) our decisions and our behaviours,
            can transform patterns we thought defined us.
          </p>
          <div className="work-image">
            <img src={leaf} alt="leaf" />
          </div>
          <p>
            "Anxiety: when our body can't cope with the situation only happening
            in our mind"{" "}
          </p>
          <p>
            I believe that we are complete beings, and that everything works in
            a synthesis. Which means that when we speak about thoughts we cant
            forget the body and visa versa, and when we speak about life I also
            leave the space for us to explore death. We are beings that have
            many different aspects to us, I sometimes work with archetypes and
            often explore with clients their feelings coming from different
            “parts” of themselves.{" "}
          </p>
          <p>
            There is an importance for us to sit in the bigger picture so that
            we can see more clearly, and sometimes we need to see our behaviour
            from a distance. This can take the form of spiritual identity, which
            I feel is an integral part of being human.{" "}
          </p>{" "}
          {/* <h2>Meeting outside</h2>

          <p>
            I am aware that sometimes we don’t want people to know we are in
            therapy, and sometimes we just want one thing that is private to us.
          </p>

          <p>
            I am also aware this can change from day to day. And also sometimes
            seeing a therapist can remind us of emotions we don’t want to feel
            in that moment.
          </p>

          <p>
            For this reason my policy is that if I see you when we are both
            outside the centre, I wont say hello or come over unless you say
            hello to me.
          </p> */}
          {/* <h2>Holiday</h2>

          <p> */}
          {/* Let me know if you have any holidays in advance, and I will also let
            you know in advance.
          </p> */}
          <div className="work-image">
            <img src={cactus} alt="cactus" />
          </div>
          {/* <h2>Cancelation</h2> */}
          {/* <p>
            If you are unable to attend, please call 48 hours in advance (2 days
            before).
          </p> */}
        </div>

        <div className="button-clients">
          <button className="button">
            {" "}
            <Link to="/">Back to home</Link>
          </button>
        </div>

        <div className="work-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Work;
