import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todo")) || [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      console.log(action);
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    toggleTodo: (state, action) => {
      state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !isDone } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
