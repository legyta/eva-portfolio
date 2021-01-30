import React from "react";
import "../stylesheets/footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>
        Registered member MBACP <br />
        297226
      </p>
      <span>
        &copy;{new Date().getFullYear()} <br />
        Eva Serra
        <br />
        07969834074
      </span>
    </footer>
  );
};

export default Footer;
