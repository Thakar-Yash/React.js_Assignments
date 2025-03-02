import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList : [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            state.todoList.push({
                id: Date.now(),
                text: action.payload,
                completed: false, 
            })
        },

        toggleComplete : (state, action) => {
            const todo = state.todoList.find((todo) => todo.id === action.payload);
            if(todo) {
                todo.completed = !todo.completed;
            }
        },

        removeTodo : (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;