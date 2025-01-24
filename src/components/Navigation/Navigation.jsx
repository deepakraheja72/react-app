// Navigation.jsx
import React from "react";

function Navigation() {
  const currentPath = window.location.pathname;

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <a 
            href="/" 
            className={`nav-link ${currentPath === "/" ? "active" : ""}`}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="/about" 
            className={`nav-link ${currentPath === "/about" ? "active" : ""}`}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="/services" 
            className={`nav-link ${currentPath === "/services" ? "active" : ""}`}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            href="/contact" 
            className={`nav-link ${currentPath === "/contact" ? "active" : ""}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
