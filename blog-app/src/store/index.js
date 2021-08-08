import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blog-reducer";

const store = configureStore({
  reducer: blogSlice.reducer
});

export default store;
