
import React from "react";
import {Link,NavLink} from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      BigBee
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/react">
            React-Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/mern">
            MERN-Stack
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/redgdgact">
            NodeJS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

