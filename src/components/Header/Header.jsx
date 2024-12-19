import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

const Header = () => {
  const { openSignIn } = useClerk();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className={`header-right ${menuOpen ? "open" : ""}`}>
        <Link to="/movies/now_playing">Now Playing</Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top_rated">Top Rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
        <header>
          <SignedOut>
            <button
              className="sign-in-button"
              onClick={() => openSignIn({ afterSignInUrl: "/" })}
            >
              Sign In
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton className="user-button" />
          </SignedIn>
        </header>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
