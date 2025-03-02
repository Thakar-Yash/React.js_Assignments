import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import "./Form.css";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userAge || !userEmail) return;
    
    const newUser = { userName, userAge, userEmail };
    console.log("Dispatching addUser:", newUser); // Debugging
    dispatch(addUser(newUser));

    setUserName('');
    setUserAge('');
    setUserEmail('');
};


  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="number"
          placeholder="User Age"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
        />
        <input
          type="email"
          placeholder="User Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default UserForm;
