import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navigation() {
  const currentPath = window.location.pathname;

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <Link 
            to="/" 
            className={`nav-link ${currentPath === "/" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={`nav-link ${currentPath === "/about" ? "active" : ""}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            className={`nav-link ${currentPath === "/services" ? "active" : ""}`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={`nav-link ${currentPath === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
