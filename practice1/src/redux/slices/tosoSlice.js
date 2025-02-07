import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todo")) || [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...state, isDone: !isDone } : state
      );
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
