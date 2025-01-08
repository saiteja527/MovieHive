import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { Skeleton } from "@mui/material";

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

  return (
    <div className="movies__list">
      <h2 className="list__header">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="cards__grid">
        {isLoading
          ? 
            [...Array(10)].map((_, index) => (
              <div key={index} className="skeleton__card">
                <Skeleton variant="rectangular" height={300} />
                <div style={{ marginTop: "10px" }}>
                  <Skeleton variant="text" width="80%" height={30} />
                  <Skeleton variant="text" width="60%" height={20} />
                </div>
              </div>
            ))
          : 
            movieList.map((movie, index) => <Card key={index} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
