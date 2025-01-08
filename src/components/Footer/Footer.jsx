import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <Skeleton variant="text" width={100} height={30} />
            <ul>
              {[...Array(3)].map((_, idx) => (
                <li key={idx}>
                  <Skeleton variant="text" width={120} height={20} />
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <Skeleton variant="text" width={100} height={30} />
            <ul>
              {[...Array(3)].map((_, idx) => (
                <li key={idx}>
                  <Skeleton variant="text" width={120} height={20} />
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <Skeleton variant="text" width={100} height={30} />
            <div className="social-icons">
              {[...Array(4)].map((_, idx) => (
                <Skeleton
                  key={idx}
                  variant="circular"
                  width={40}
                  height={40}
                  style={{ marginRight: "10px" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <Skeleton variant="text" width="60%" height={20} />
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>QuickLinks</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="icon twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="icon instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="icon linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MovieHive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
