import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MovieList from "./components/MoviesList/MovieList";
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="movie/:id" element={<MovieDetails/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
