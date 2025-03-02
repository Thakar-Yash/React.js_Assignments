import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/todoSlice';

const TodoInput = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const addTask = () => {
      if (task.trim()) {
          dispatch(addTodo(task)); 
          setTask(""); 
      }
  };

  return (
    <div>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter a Task'/>
        <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default TodoInput
