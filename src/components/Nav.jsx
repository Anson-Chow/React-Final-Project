import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate()

  return (
    <div className="navigation">
      <nav>
        <div className="nav__title">MovieNet</div>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              onClick={() => navigate(`/`)}
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Home
            </a>
          </li>
          <li className="nav__link">
            <a
              onClick={() => navigate(`search/avengers`)}
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Browse Movies
            </a>
          </li>
          <li className="nav__link">
            <a
              href=""
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
