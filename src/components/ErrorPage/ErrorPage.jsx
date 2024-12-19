import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate(); 

  const goHome = () => {
    navigate("/"); 
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">
          <i className="fas fa-exclamation-triangle"></i> 
        </div>
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">
          The page you're looking for cannot be found.
        </p>
        <button className="error-button" onClick={goHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
