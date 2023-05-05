import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item underline_hover">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item underline_hover">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item underline_hover">
                <a className="nav-link" href="#work">
                  Works
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Links
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.linkedin.com/in/song-vu-nguyen"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://songvunguyen.itch.io/"
                      target="_blank"
                    >
                      Itch.io
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/songvunguyen"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item underline_hover">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
