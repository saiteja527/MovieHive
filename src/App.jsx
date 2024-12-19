import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MovieList from "./components/MoviesList/MovieList";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="movie/:id" element={<MovieDetails/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<ErrorPage/>}></Route>
      </Routes>
      <hr/>
      <Footer/>
    </div>
  );
};

export default App;
