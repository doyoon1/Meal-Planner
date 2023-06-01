import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">MealMate</div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="rightSide">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About us
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Log in
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;