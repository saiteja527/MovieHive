import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { HashLoader } from "react-spinners";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${
        import.meta.env.VITE_SECRET_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div
        className="loading__container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <HashLoader color="#ff914d" size="30px" />
      </div>
    );
  }

  return (
    <div className="movies__list">
      <h2 className="list__header">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="cards__grid">
        {movieList.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
