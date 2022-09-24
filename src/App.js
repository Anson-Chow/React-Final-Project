import Movies from "./pages/Movies";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Nav from "./components/Nav";
import { AppProvider } from "./pages/AppContext";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path = "/" element={<Home />}></Route>
          <Route path = "/id" element={<Movies/>}></Route>
          <Route path = "/movieinfo" element={<MovieInfo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

