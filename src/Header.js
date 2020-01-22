import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <nav className="layer">
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/blog_page">
        Blog Page
      </NavLink>
    </nav>
  );
}

export default Header;