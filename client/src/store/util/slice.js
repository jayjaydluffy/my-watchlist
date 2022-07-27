import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = utilSlice.actions;
export default utilSlice;