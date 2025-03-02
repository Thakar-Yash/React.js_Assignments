import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "../app/todoSlice";

const TodoItems = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{index + 1}</td>
      <td className={todo.completed ? "completed" : ""}>{todo.text}</td>
      <td>{todo.completed ? "✅ Completed" : "⏳ Pending"}</td>
      <td>
        <button
          onClick={() => dispatch(toggleComplete(todo.id))}
          className="complete-btn"
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="remove-btn"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TodoItems;
