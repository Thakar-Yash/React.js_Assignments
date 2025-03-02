import React from "react";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList);

  return (
    <div>
      <h2>Task List</h2>
      {todoList.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo, index) => (
              <TodoItems key={todo.id} index={index} todo={todo} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoList;
