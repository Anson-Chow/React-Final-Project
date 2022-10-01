import Movies from "./pages/Movies";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Nav from "./components/Nav";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

function App() {
  const [loading, setLoading] = useState("false");
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path = "/" element={<Home />}></Route>
          <Route path = "search" element={<Movies/>}></Route>
          <Route path = "search/:searchInput" element={<Movies/>}></Route>
          <Route path = ":id" element={<MovieInfo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

