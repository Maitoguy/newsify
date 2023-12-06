// store.js

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { newsReducer } from "./reducers/newsReducer";

export const store = configureStore({
  reducer: {
    userReducer,
    news: newsReducer 
  }
});
