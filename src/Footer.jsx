import React from "react";
import "./CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div>
          <span className="copy">&#169; Petter Boström 2023</span>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/petter-bostr%C3%B6m-a72ba788/"
            className="fa fa-linkedin"
            target="_blank"
          ></a>
        </div>
        <div>
          <a
            href="https://github.com/Nomijah"
            className="fa fa-github"
            target="_blank"
          ></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
