import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  
  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleForgotClick = () => {
    navigate("/forgot");
  };

  return (
    <div className="body">
      <div className="container">
        <div className="left-side">
          <p>Sign in</p>
        </div>

        <div className="right-side">
          <form>
            <input placeholder="Username" />
            <br />
            <input placeholder="Password" type="password" />
            <br />
            <button>Log in</button>
            <div className="form-text">
              <NavLink exact to="/forgot" onClick={handleForgotClick}>
                Forgot password?
              </NavLink>
              <NavLink exact to="/register" onClick={handleRegisterClick}>
                Register
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
