import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push({ id: Date.now(), ...action.payload });
        },
        updateUser: (state, action) => {
            const { id, userName, userAge, userEmail } = action.payload;
            const user = state.find((user) => user.id === id);
            if (user) {
                user.userName = userName;
                user.userAge = userAge;
                user.userEmail = userEmail;
            }
        },
        deleteUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload.id);
        }
    }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
