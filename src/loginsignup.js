import React from "react";
import { Link } from "react-router-dom";
import "./loginsignup.css";

function LoginSignup() {
  return (
    <div className="login-signup-container">
      <Link to="/login">
        <button className="login-button">Log In</button>
      </Link>
      <Link to="/signup">
        <button className="signup-button">Sign Up</button>
      </Link>
    </div>
  );
}

export default LoginSignup;
