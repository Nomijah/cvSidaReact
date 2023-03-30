import React from "react";
import "./CSS/Contact.css";

function Contact() {
  return (
    <div className="mainGrid">
      <div className="contactText">
        <h1>Feel free to contact me at:</h1>
      </div>
      <div className="contactBox">
        <a href="tel:+46735012798">+46 735-012798</a>
      </div>
      <div className="contactBox">
        <a href="mailTo:petter.bostrom@gmail.com">petter.bostrom@gmail.com</a>
      </div>
    </div>
  );
}

export default Contact;
