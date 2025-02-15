import React from "react";
import './app.css'

const Fruits = ["Apple", "Banana", "Kiwi", "Date", "Grape"];

const UserList = () => {
  const Users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Emily Davis" },
    { id: 5, name: "Chris Brown" },
  ];

  return (
    <div>
      <h3>List of Users</h3>
      <ul>
        {Users.map((user) => (
          <li key={user.id} style={{ listStyle: "none" }}>
            {user.id}.{user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const List_Keys = () => {
  return (
    <>
      <div>
        <h3>Lists of Fruits</h3>
        <ul>
          {Fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
      <br /><br />
      <div>
        <UserList />
      </div>
    </>
  );
};

export default List_Keys;
