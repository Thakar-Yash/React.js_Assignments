import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import './styles.css'
const App = () => {
  return (
      <div className="app-container">
        <h1>CRUD App with Redux Toolkit</h1>
        <UserForm />
        <UserList />
      </div>
  );
};

export default App;
