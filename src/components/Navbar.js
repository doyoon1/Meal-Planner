import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav>
      <img className="logo" onClick={handleHomeClick} src={Logo} />
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
        <NavLink to="/grocery" activeClassName="active">
          Grocery List
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Log in
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
