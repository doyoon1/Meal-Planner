import React from "react";
import "../styles/Home.css";
import Dish1 from "../assets/dish1.png";
import Dish2 from "../assets/dish2.png";
import Dish3 from "../assets/dish3.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";

function Home() {
  return (
    <div>
      <div className="showcase"></div>
      <div className="actions">
        <button className="btn">Check Famous Recipes</button>
        <button className="btn">Register Now</button>
      </div>
      <div className="content">
        <div className="content_item">
          <img src={Dish1} />
          <div className="info">
            <h1>500+ Filipino Recipes</h1>
            <p>
              Countless delicious Filipino cuisines to try and cook for your
              Family and loveones.
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={Dish2} />
          <div className="info">
            <h1>Many Healthy Recipe Options</h1>
            <p>
              Has a healthy option where the recipes that we serve you are
              healthy foods that can help you and your family have a healthy
              food for your day.
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={Dish3} />
          <div className="info">
            <h1>Built In Market List</h1>
            <p>
              The website can generate market lists of the ingredients that your
              recipe needs so you don’t have to think about the exact
              measurements of each ingredient.
            </p>
          </div>
        </div>
      </div>
      <div className="reg">
        <div className="label">
          Ready to embark in your cooking Journey? Enter your family size to
          start!
        </div>
        <form>
          <input />
          <br />
          Serving Size: <input />
          <br />
          Food Type: <input />
          <br />
          <button>Cook!</button>
        </form>
      </div>
      <footer>
        <div className="footer-contents">
          <div className="icons">
            <img src={Facebook} />
            <img src={Twitter} />
            <img src={Instagram} />
          </div>
          <div className="lbl">
            All Rights Reserved <br />
            2023
          </div>
          <div className="brand">MealMate</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;