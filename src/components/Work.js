import React, { Component } from "react";
import "../stylesheets/work.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Clients from "./Clients";
import TherapyTypes from "./TherapyTypes";
import HelpWith from "./HelpWith";
import cactus from "../images/cactus.svg";

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
          <p>I deliver long-term and short-term face-to-face therapies.</p>
          <p>
            Our appointments are weekly at the same time each week, at the time
            we agree together.
          </p>

          <p>
            The appointments last 50 minutes, these appointments are
            confidential, which means that what you share with me stays in the
            room, or is a private zoom call.{" "}
          </p>

          <p>
            If you are at risk of being harmed or harming someone else, we can
            explore this together and I can support you in reporting things you
            wish to report.
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

          <h1>Therapy approach</h1>

          <p>
            As an integrative therapist, I integrate a lot of different
            modalities in to the work. This can take the form of a more physical
            expression of emotions, or we may work with letter writing and inner
            vulnerability work.
          </p>

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

          <p>
            Primarily this is your space and you can share what is important to
            you now, as now is all there really is. The past can dictate how
            re-act to a brand new situation in the present, this is where empty
            chair work and narrative therapy is useful.
          </p>

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
          <p>
            I also work in Schools as a child and adolescent therapist, so I
            bring creativity, art and play into the way I work.
          </p>

          <p>
            Sometimes when we start feeling things for the first time, therapy
            can feel more painful before we feel more free and able to cope.
          </p>

          <h2>Meeting outside</h2>

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
          </p>

          <div className="work-image">
            <img src={cactus} alt="cactus" />
          </div>
          <h2>Holiday</h2>

          <p>
            Let me know if you have any holidays in advance, and I will also let
            you know in advance.
          </p>
          <h2>Cancelation</h2>
          <p>
            If you are unable to attend, please call 48 hours in advance (2 days
            before).
          </p>
        </div>

        <div className="work-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Work;
