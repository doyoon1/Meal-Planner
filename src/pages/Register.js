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
              <input placeholder="Password" type="password" />
              <input placeholder="Confirm password" type="password" />
            </div>
            <input placeholder="Birthday" type="date" />
            <input placeholder="Email" />
            <select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
