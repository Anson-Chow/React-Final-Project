import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MovieInfo = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState("false");

  async function fetchMovieData() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?&apikey=b97ff1dd&i=${id}`
    );
    setMovieData(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchMovieData();
    }, 300);
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <div>
            <ArrowBackIcon
              sx={{ fontSize: "60px", background: "none", border: "none" }}
              className="arrowBack__Icon"
              onClick={() => navigate(`/search/ `)}
            />
          </div>
          <div className="movieInfo__wrapper">
            <div>
              <img
                src={movieData.Poster}
                className="movieInfo__poster"
                alt=""
              />
            </div>
            <div className="movieInfo__data">
              <h1>{movieData.Title}</h1>
              <div className="movieInfo__data--para">
                <p>
                  <span className="movieInfo__data--descriptors">Year:</span>{" "}
                  {movieData.Year}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">Length:</span>{" "}
                  {movieData.Runtime}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">Actors:</span>{" "}
                  {movieData.Actors}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">Genre:</span>{" "}
                  {movieData.Genre}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">
                    IMDB Rating:
                  </span>{" "}
                  {movieData.imdbRating}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">
                    Languages:
                  </span>{" "}
                  {movieData.Language}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors"></span>{" "}
                  <div className="movieInfo__data--plot">{movieData.Plot}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        new Array(1).fill(0).map((_, index) => (
          <div className="movieInfo__wrapper" key={index}>
            <div className="movieInfo__body">
              <p className="movieInfo__body--skeleton"></p>
            </div>
            <div className="movieInfo__data--wrapper">
              <div className="movieInfo__title--top">
                <div className="movieInfo__title--skeleton--top"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title--bottom">
                <div className="movieInfo__title--skeleton--bottom"></div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieInfo;
