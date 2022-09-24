import React from "react";

const Nav = () => {
  return (
    <div className="navigation">
      <nav>
        <div className="nav__title">Metflix</div>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              href="#languages"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Home
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Find Movies
            </a>
          </li>
          <li className="nav__link">
            <a
              href="mailto:chow.anson25@gmail.com"
              className="nav__link--anchor nav__link--anchor-primary"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
