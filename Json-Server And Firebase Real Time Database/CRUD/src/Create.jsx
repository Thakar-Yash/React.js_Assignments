import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: ""
  })

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="Enter First Name"
            onChange={(e) => setValues({ ...values, fname: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="Enter Last Name"
            onChange={(e) => setValues({ ...values, lname: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-success m-3">
          Submit
        </button>
        <Link to="/" className="btn btn-primary m-3">
          Back
        </Link>
      </form>
    </div>
  );
}

export default Create;
