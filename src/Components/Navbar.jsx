import React from "react";
import { Link } from "react-router-dom";
import "./Style.css/Navbar.css";
import logo from "../assets/cuppa-cafe-high-resolution-logo-white-transparent.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark mb-4"
      style={{
        background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
      }}
    >
      <div className="container d-flex justify-content-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Cafe Logo" width="150" height="160" />
          <span className="d-none d-lg-inline">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuppa Cafe
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
