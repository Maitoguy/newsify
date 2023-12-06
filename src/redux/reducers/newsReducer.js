
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: null,
  newsArray: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    currentNews: (state, action) => {
      state.news = action.payload;
    },
    addFavourite: (state, action) => {
      state.newsArray.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.newsArray = state.newsArray.filter((item) => item !== action.payload);
    },
  },
});

export const { reducer: newsReducer, actions: news } = newsSlice;
export const newsSelector = (state) => state.news;
