import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MovieLogo from "../assets/movie-logo.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppContext from "./AppContext";


const Home = () => {
  // const { search } = useParams();
  const {movies, handleMoviesSearch} = useContext(AppContext);
  const [searchId, setSearchId] = useState('');
  // const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  function onSearch() {
    fetchMovies();
  }


  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?&apikey=b97ff1dd&s=${searchId}`
    );
    // console.log(data);
    // console.log(searchId)
    handleMoviesSearch(data)
    console.log(movies)
    // console.log(movies)
    // navigate('/id');
  }
  const handleClick = () => {
    navigate('/id');
    }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <section id="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1>Canada's most popular online movie platform</h1>
              <h2>
                Watch any movie with <span className="purple">Metflix</span>
              </h2>
              <div className="home__search--wrapper">
                <input
                  type="text"
                  value={searchId}
                  onChange={(event) => {
                    setSearchId(event.target.value);
                  }}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        onSearch()
                    }
                  }}
                />
                <div>
                  <a href="">
                    <button className="btn" onClick={handleClick}>
                      <SearchIcon
                        sx={{ fontSize: "48px" }}
                        className="search__inputIcon"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <figure className="header__img--wrapper">
              <img src={MovieLogo} alt="movie logo" />
            </figure>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Home;
