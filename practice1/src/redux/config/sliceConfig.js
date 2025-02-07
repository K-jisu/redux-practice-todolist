import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/tosoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
