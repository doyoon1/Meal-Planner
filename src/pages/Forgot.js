import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Forgot.css";

function Forgot() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div className="container1">
      <div className="square">
        <h2>Find your account</h2>
        <hr />
        <p>
          Please enter your email or mobile number to search for your account.
        </p>
        <input placeholder="Email or mobile number" />
        <div className="btns">
          <button onClick={handleLoginClick}>Cancel</button>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
