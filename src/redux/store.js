// src/redux/store.js
// "use client";

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import watchReducer from "./slices/watchSlice"; // Import your watch slice
import uiReducer from "./slices/uiSlice"; // Import your UI slice

// Configure the Redux store with reducers
const makeStore = () =>
  configureStore({
    reducer: {
      watch: watchReducer, // Add watch reducer
      ui: uiReducer, // Add UI reducer
    },
  });

// Create wrapper for SSR support
export const wrapper = createWrapper(makeStore);

export const store = makeStore();
