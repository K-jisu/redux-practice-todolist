import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todo")) || [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload.newTodo];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
    completeTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
