import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser, deleteUser } from "../redux/userSlice";

const UserItem = ({ user, index }) => {
  const dispatch = useDispatch();

  // Ensure user exists before setting state
  const [userName, setUserName] = useState(user?.userName || "");
  const [userAge, setUserAge] = useState(user?.userAge || "");
  const [userEmail, setUserEmail] = useState(user?.userEmail || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    dispatch(updateUser({ id: user.id, userName, userAge, userEmail }));
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {isEditing ? (
          <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        ) : (
          user.userName
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="number" value={userAge} onChange={(e) => setUserAge(e.target.value)} />
        ) : (
          user.userAge
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        ) : (
          user.userEmail
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => dispatch(deleteUser({ id: user.id }))}>Delete</button>
      </td>
    </tr>
  );
};

export default UserItem;
