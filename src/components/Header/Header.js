// src/components/Header.js
import React from "react";
import "./Header.css"; // Import the CSS file for styling
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <Navigation />
    </header>
  );
};

export default Header;