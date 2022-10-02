import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MovieLogo from "../assets/movie-logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState("false");

  function initialSearch(event) {
    setLoading(true);
    setTimeout(() => {
      navigate(`/search/${userInput}`);
    }, 300);
  }

  const search = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <section id="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1>Canada's most popular online movie platform</h1>
              <h2>
                Watch any movie with <span className="purple">MovieNet</span>
              </h2>
              <div className="home__search--wrapper">
                <input
                  type="text"
                  value={userInput}
                  placeholder="Search Movies"
                  onChange={(event) => {
                    setUserInput(event.target.value);
                  }}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" && userInput) {
                      initialSearch();
                    } else {
                      return false;
                    }
                  }}
                />
                <div>
                  <button
                    className="btn"
                    onClick={() => (userInput ? initialSearch() : null)}
                  >
                    <SearchIcon
                      sx={{ fontSize: "48px", background: "none" }}
                      className="search__inputIcon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <figure className="home__img--wrapper">
                <img
                  src={MovieLogo}
                  className="home__img"
                  alt="movie logo"
                />
              </figure>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Home;
