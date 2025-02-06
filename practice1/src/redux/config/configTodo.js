import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/TodoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
