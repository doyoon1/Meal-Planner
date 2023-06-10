import React from "react";
import "../styles/Home.css";
import Dish1 from "../assets/dish1.png";
import Dish2 from "../assets/dish2.png";
import Dish3 from "../assets/dish3.png";
import Logo from "../assets/footer_logo.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateLog = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigateLog("/login");
  };

  return (
    <div>
      <div className="showcase">
        <div className="title">
          <h1>Plan, Prep, Savor.</h1>
          <h1>Your Recipe for Easy Meal Planning.</h1>
          <button onClick={handleLoginClick}>Start Cooking!</button>
        </div>
      </div>
      <div className="actions">
        <button className="btn">Check Famous Recipes</button>
        <button className="btn" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
      <div className="content">
        <div className="content_item">
          <img src={Dish1} />
          <div className="info">
            <h1>500+ Filipino Recipes</h1>
            <p>
              Countless delicious Filipino cuisines to try and cook for your
              Family and Loved ones.
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={Dish2} />
          <div className="info">
            <h1>Many Budget-Friendly Recipe Options</h1>
            <p>
              Our budget-friendly meal planner offers a wide range of healthy
              recipe options, ensuring that you and your family can enjoy
              nutritious meals without breaking the bank.
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={Dish3} />
          <div className="info">
            <h1>Built In Market List</h1>
            <p>
              The website generates grocery lists for your recipe's ingredients,
              eliminating the need to worry about precise measurements.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-contents">
          <div className="icons">
            <img src={Facebook} />
            <img src={Twitter} />
            <img src={Instagram} />
          </div>
          <div className="lbl">
            ©All Rights Reserved <br />
            2023
          </div>
          <img className="brand" src={Logo} />
        </div>
      </footer>
    </div>
  );
}

export default Home;
