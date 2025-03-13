import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Card.css";

const skeletonTheme = createTheme({
  components: {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "#202020",
          color: "#444", 
        },
      },
    },
  },
});

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={skeletonTheme}>
      {isLoading ? (
        <div className="card-container">
          <Skeleton variant="rectangular" width="100%" height={300} />
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card-container">
            <img
              className="card-image"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
              alt={movie ? movie.original_title : ""}
            />
            <div className="card-overlay">
              <div className="card-title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card-runtime">
                {movie ? movie.release_date : ""}
                <span className="card-rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card-description">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </ThemeProvider>
  );
};

export default Card;
