// src/redux/store.js
"use client";

import { configureStore } from "@reduxjs/toolkit";
import watchReducer from "./slices/watchSlice"; // Import your watch slice
import uiReducer from "./slices/uiSlice"; // Import your UI slice

// Configure the Redux store with reducers
export const store = configureStore({
  reducer: {
    watch: watchReducer, // Add watch reducer
    ui: uiReducer, // Add UI reducer
  },
});
