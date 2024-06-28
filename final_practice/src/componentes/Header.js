import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

const Header = () => (
  <header className="header">
    <nav className="navigation">
      <Link to="/" className="logo">
        BOOKREALM
      </Link>
      <div className="menu">
        <Link to="/about">ABOUT US</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/information">INFORMATION</Link>
        <Link to="/books" className="APIbooks">API BOOKS</Link>
      </div>
    </nav>
  </header>
);

export default Header;
