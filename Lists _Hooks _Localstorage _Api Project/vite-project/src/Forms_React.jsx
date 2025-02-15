import React, { useState } from "react";
import "./app.css";

const UserInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]); // Change to an array to store multiple entries

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const error = {};

    if (!formData.name.trim()) error.name = "Name is Required.";
    if (!formData.email.trim()) {
      error.email = "Email is Required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = "Enter a valid email address.";
    }
    if (!formData.pass.trim()) error.pass = "Password is Required.";
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmittedData([...submittedData, formData]); // Append new data to the array
      setFormData({ name: "", email: "", pass: "" }); // Reset form
    }
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <br />
          <br />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={formData.pass}
            onChange={handleChange}
          />
          {errors.pass && <p style={{ color: "red" }}>{errors.pass}</p>}
          <br />
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div>
          <h2>Users List</h2>
          <table border={2} cellPadding={10}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.pass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Forms_React = () => {
  return (
    <>
      <div>
        <UserInfo />
      </div>
    </>
  );
};

export default Forms_React;