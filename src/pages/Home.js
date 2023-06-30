import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const navigateLog = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigateLog("/login");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    const formFields = Array.from(form.current.elements);
    const errors = {};
    let hasError = false;

    formFields.forEach((field) => {
      if (field.required && field.value.trim() === "") {
        errors[field.name] = "This field is required.";
        hasError = true;
      }
    });

    // Display errors if any
    if (hasError) {
      setFormErrors(errors);
      return;
    }

    // Clear form errors if validation passes
    setFormErrors({});

    // Send the email using emailjs
    emailjs
      .sendForm(
        "service_v3d5l4r",
        "template_18m14ij",
        form.current,
        "q_HVkahGwqe_6YP3f"
      )
      .then((result) => {
        console.log(result.text);
        console.log("message sent!");

        // Clear input fields after successful submission
        form.current.reset();

        // Show a success message
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div className="showcase">
        <div className="title">
          <h1>Plan, Prep, Savor.</h1>
          <h1>Your Recipe for Easy Meal Planning.</h1>
          <button className="showcase-btn" onClick={handleLoginClick}>
            Start Cooking!
          </button>
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
          <img src={Dish1} alt="Dish 1" />
          <div className="info">
            <h1>500+ Filipino Recipes</h1>
            <p>
              Countless delicious Filipino cuisines to try and cook for your
              Family and Loved ones.
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={Dish2} alt="Dish 2" />
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
          <img src={Dish3} alt="Dish 3" />
          <div className="info">
            <h1>Built-In Market List</h1>
            <p>
              The website generates grocery lists for your recipe's ingredients,
              eliminating the need to worry about precise measurements.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <form className="contact-container" ref={form} onSubmit={sendEmail}>
          <h1>Get in touch!</h1>
          <input type="text" name="user_name" placeholder="Name" required />
          {formErrors["user_name"] && (
            <span
              className="error"
              style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
            >
              {formErrors["user_name"]}
            </span>
          )}

          <input
            type="text"
            name="user_email"
            placeholder="Email Address"
            required
          />
          {formErrors["user_email"] && (
            <span
              className="error"
              style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
            >
              {formErrors["user_email"]}
            </span>
          )}
          <textarea
            rows="4"
            cols="50"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          {formErrors["message"] && (
            <span
              className="error"
              style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
            >
              {formErrors["message"]}
            </span>
          )}

          <input type="submit" value="Send" />
        </form>
      </div>
      <footer>
        <div className="footer-contents">
          <div className="icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
          </div>
          <div className="lbl">
            © All Rights Reserved <br />
            2023
          </div>
          <img className="brand" src={Logo} alt="Logo" />
        </div>
      </footer>
    </div>
  );
}

export default Home;
