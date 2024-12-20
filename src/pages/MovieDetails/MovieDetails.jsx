import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";

const MovieDetails = () => {
  const [currentMovieDetail, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_SECRET_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div
        className="loading-indicator"
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
    <div className="movie-container">
      <div className="movie-intro">
        <img
          className="movie-backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          alt="Movie backdrop"
        />
      </div>
      <div className="movie-details">
        <div className="movie-details-left">
          <div className="movie-poster-box">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt="Movie poster"
            />
          </div>
        </div>
        <div className="movie-details-right">
          <div className="movie-details-top">
            <div className="movie-title">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie-tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie-rating">
              Rating:{" "}
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie-vote-count">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie-runtime">
              Duration:{" "}
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie-release-date">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="movie-genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre, index) => (
                    <span className="movie-genre" key={index}>
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie-details-bottom">
            <div className="synopsis-title">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie-links">
        <div className="movie-links-heading">Links</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie-home-button movie-action-button">
                MovieWebsite{" "}
                <i className="new-tab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie-imdb-button movie-action-button">
                MovieLink<i className="new-tab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
