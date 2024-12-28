// src/redux/slices/watchSlice.js
"use client";

import { createSlice } from "@reduxjs/toolkit";
import { collections } from "../../data/collections";

const defaultCollection = collections[0];
const defaultCase = defaultCollection.cases[0];
const defaultBand = defaultCollection.bands[0];
const defaultSize = defaultCollection.sizes[0];

const initialState = {
  collection: defaultCollection.id,
  size: defaultSize,
  face: defaultCase,
  band: defaultBand,
  totalPrice:
    defaultCase.variations[0].price +
    defaultBand.variations[0].price +
    defaultCollection.sizes[0].price,
  view: "front",
  activeSection: null,
};

export const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    setCollection: (state, action) => {
      const newCollection = collections.find((c) => c.id === action.payload);
      if (!newCollection) return;

      state.collection = newCollection.id;
      state.size = newCollection.sizes[0];
      state.face = newCollection.cases[0];
      state.band = newCollection.bands[0];
      state.totalPrice =
        newCollection.cases[0].variations[0].price +
        newCollection.bands[0].variations[0].price +
        newCollection.sizes[0].price;
    },

    setSize: (state, action) => {
      const collection = collections.find((c) => c.id === state.collection);
      if (!collection) return;

      const sizeConfig = collection.sizes.find(
        (s) => s.size === action.payload.size
      );
      if (!sizeConfig) return;

      state.size = action.payload;
      state.totalPrice =
        state.face.variations[0].price +
        state.band.variations[0].price +
        sizeConfig.price;
    },

    setFace: (state, action) => {
      console.log("action", action);
      const collection = collections.find((c) => c.id === state.collection);
      console.log("collection", collection || "N/A");
      if (!collection) return;

      const newCase = collection.cases.find((c) => c.id === action.payload.id);
      console.log("newCase", newCase || "N/A");
      if (!newCase) return;

      state.face = newCase;
      state.totalPrice =
        newCase.variations[0].price +
        state.band.variations[0].price +
        collection.sizes.find((s) => s.size === state.size.size)?.price;
    },

    setCase: (state, action) => {
      console.log("action", action.payload);
      const collection = collections.find((c) => c.id === state.collection);
      console.log("collection", collection || "N/A");
      if (!collection) return;

      const newCase = collection.cases.find((each) =>
        each.variations.find((variation) => variation.id === action.payload.id)
      );

      // const newCase = collection.cases.find((c) => c.id === action.payload.id);
      console.log("newCase", newCase || "N/A");
      if (!newCase) return;

      state.face = newCase.variations.find(
        (variation) => variation.id === action.payload.id
      );
      state.totalPrice =
        action.payload.price +
        (state.band.price || 0) +
        (collection.sizes.find((s) => s.size === state.size.size)?.price || 0);
    },

    setBand: (state, action) => {
      const collection = collections.find((c) => c.id === state.collection);
      if (!collection) return;

      const newBand = collection.bands.find((each) =>
        each.variations.find((variation) => variation.id === action.payload.id)
      );

      // const newBand = collection.bands.find((b) => b.id === action.payload.id);
      if (!newBand) return;

      state.band = newBand;
      state.totalPrice =
        state.face.variations[0].price +
        action.payload.price +
        (collection.sizes.find((s) => s.size === state.size.size)?.price || 0);
    },

    setCurrentBand: (state, action) => {
      const collection = collections.find((c) => c.id === state.collection);
      if (!collection) return;

      const newBand = collection.bands.find((b) => b.id === action.payload.id);
      if (!newBand) return;

      state.totalPrice =
        (state.face.price || 0) +
        action.payload.price +
        (collection.sizes.find((s) => s.size === state.size.size)?.price || 0);
    },

    setView: (state, action) => {
      state.view = action.payload;
    },

    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const {
  setCollection,
  setSize,
  setFace,
  setCase,
  setBand,
  setCurrentBand,
  setView,
  setActiveSection,
} = watchSlice.actions;

export default watchSlice.reducer;
