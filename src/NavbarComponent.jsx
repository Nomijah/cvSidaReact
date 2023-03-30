import React from "react";
import "./CSS/NavbarComponent.css";
import { Outlet, Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav className="header">
      <ul>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/Portfolio">
          Portfolio
        </Link>
        <Link className="navLink" to="/Contact">
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
