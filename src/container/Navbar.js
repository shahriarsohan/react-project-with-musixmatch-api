import React from "react";

import "../assets/main.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 container">
        <a class="navbar-brand" href="#">
          <img
            src={require("../assets/Mark with Circle Shape + Logotype on light.png")}
            width="auto"
            height="30"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mr-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
