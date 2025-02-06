import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redux/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
