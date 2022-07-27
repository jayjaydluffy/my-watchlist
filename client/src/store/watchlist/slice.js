import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedShow: null,
  isAddNew: false,
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    selectShow: (state, action) => {
      state.selectedShow = action.payload;
      state.isAddNew = false;
    },
    addNewShow: (state) => {
      state.isAddNew = true;
      state.selectedShow = null;
    },
    cancelAddShow: (state) => {
      state.isAddNew = false;
      state.selectedShow = null;
    },
  },
});

export const { selectShow, addNewShow, cancelAddShow } = watchlistSlice.actions;

export default watchlistSlice;
