// Conditional Rendering
import './app.css'
import React, { useState } from "react";

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h3>{isLoggedIn ? "Welcome, User" : "Please Login"}</h3>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>LogIn</button>
      )}
    </div>
  );
};

const Eligible4Vote = () => {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const eligibilityMessage =
        age >= 18
        ? "You are eligible to vote."
        : age === ""
        ? ""
        : "You are not eligible to vote.";
  return (
    <div>
      <div>
        <label htmlFor="age">Enter Your Age: </label>
        <input
          type="number"
          id="age"
          onChange={handleChange}
          placeholder="Enter Age"
          value={age}
        />
      </div>
      {age !== "" && <h4>{eligibilityMessage}</h4>}
    </div>
  );
};

const Conditional_Rendering = () => {
  return (
    <>
      <h3>Conditional Rendering Examples</h3>
      <div>
        <LoginControl />
      </div>
      <div>
        <h2>Voting Eligibility Checker</h2>
        <Eligible4Vote />
      </div>
    </>
  );
};

export default Conditional_Rendering;
