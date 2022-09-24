import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "./AppContext";
import { LocalMoviesSharp } from "@mui/icons-material";

const Movies = () => {
  let navigate = useNavigate()
  const { search } = useParams();
  // const [movies, setMovies] = useState([]);
  const {movies} = useContext(AppContext);
  const [loading, setLoading] = useState();
 
  console.log(movies)

  return (
    <>
      <div className="movie">
        
        {movies.Search?.map(movie => {
          return(
            <p>{movie.Title}</p>
          )
        })}
      </div>
    </>
  );
};

export default Movies;



  // async function fetchMovies() {
  //   setLoading(true);
  //   const { data } = await axios.get(
  //     "https://www.omdbapi.com/?&apikey=b97ff1dd&s=fast"
  //   );
  //   console.log(data);
  //   setMovies(data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

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