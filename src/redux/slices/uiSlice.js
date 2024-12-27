// src/redux/slices/uiSlice.js
"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLanding: true,
  isCollectionDrop: false,
  featureButtonOpen: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLanding: (state, action) => {
      state.isLanding = action.payload;
    },
    setIsCollectionDrop: (state, action) => {
      state.isCollectionDrop = action.payload;
    },
    setFeatureButtonOpen: (state, action) => {
      state.featureButtonOpen =
        state.featureButtonOpen === action.payload ? null : action.payload;
    },
  },
});

export const { setLanding, setIsCollectionDrop, setFeatureButtonOpen } =
  uiSlice.actions;

export default uiSlice.reducer;
