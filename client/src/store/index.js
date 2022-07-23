import { configureStore } from "@reduxjs/toolkit";
import utilSlice from "./util/slice";

const store = configureStore({
  reducer: {
    [utilSlice.name]: utilSlice.reducer
  },
});

export default store;
