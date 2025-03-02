import React from "react";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No User Added</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <UserItem key={user.id} index={index} user={user} />
              ))
            ) : (
              <p>No users found</p>
            )}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserList;
