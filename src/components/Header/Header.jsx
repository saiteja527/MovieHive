import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src="logo.png" alt="" className="logo" />
        </Link>
      </div>
      <div className="header-right">
        <Link to="/movies/now_playing">Now Playing</Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top_rated">Top Rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
      </div>
    </div>
  );
};

export default Header;
