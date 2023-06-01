import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div className="container">
      <div className="leftside">
        <p>Sign up</p>
      </div>
      <div className="rightside">
        <div className="box">
          <div className="box-right">
            <div className="box-input-row">
              <input placeholder="First name" />
              <input placeholder="Last name" />
            </div>
            <input placeholder="Username" />
            <div className="box-input-row">
              <input placeholder="Password" />
              <input placeholder="Confirm password" />
            </div>
            <input placeholder="Birthday" />
            <input placeholder="Email" />
            <input placeholder="Gender" />
            <button>Register</button>
            <div className="form-text">
              <NavLink exact to="/login" onClick={handleLoginClick}>
                Already have an account? Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
