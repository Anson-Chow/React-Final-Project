import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import Movie from "../components/Movie";

const Movies = () => {
  const params = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState('false');

  function onSearch() {
    setLoading(true);
    setTimeout(() => {
      fetchMovies(searchInput);
    }, 300);
  }

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?&apikey=b97ff1dd&s=${
        searchInput || params.searchInput
      }`
    );
    setMovies(data);
    setLoading(false);
    console.log(searchInput);
    console.log(params.searchInput);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchMovies(searchInput);
    }, 300);
    fetchMovies();
  }, []);

  return (
    <>
      <section id="search">
        <div className="container">
            <h1 className="browse">Browse our movies</h1>
            <div className="movies__search--wrapper">
              <input
                type="text"
                value={searchInput}
                placeholder="Search Movies"
                onChange={(event) => {
                  setSearchInput(event.target.value);
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    onSearch();
                  }
                }}
              />
              <div>
                  <button className="btn" onClick={() => onSearch()}>
                    <SearchIcon
                      sx={{ fontSize: "48px", background: "none" }}
                      className="search__inputIcon"
                    />
                  </button>
              </div>
            </div>
            <h2 className="search__text">
              Search results for: {searchInput || params.searchInput}
            </h2>
            <div className="movies">
             {!loading ?
              movies.Search?.map((movie) => (
                <Movie
                  key={movie.imdbID}
                  id={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                />
              )).slice(0, 6)
              : new Array(6).fill(0).map((_, index) => (
                <div className="movie" key={index}>
                  <div className="movie__body">
                    <p className="movie__body--skeleton"></p>
                  </div>
                  <div className="movie__title">
                    <div className="movie__title--skeleton"></div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default Movies;

// {movies.Search?.map((movie) => (
//   <div key= {movie.imdbID}>
//     <figure className="movie__img--wrapper" onClick={() => navigate(`${movie.imdbID}`)}>
//       <img src={movie.Poster} alt="" className="movie__img" />
//     </figure>
//     <div className="movie__info">
//       <p>
//         <b>{movie.Title}</b>
//       </p>
//       <p>
//         <b>{movie.Year}</b>
//       </p>
//     </div>
//   </div>
// ))}
