import utilSlice from "./util/slice";
import watchlistApi from "./watchlist/api";
import watchlistSlice from "./watchlist/slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    [utilSlice.name]: utilSlice.reducer,
    [watchlistSlice.name]: watchlistSlice.reducer,
    [watchlistApi.reducerPath]: watchlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(watchlistApi.middleware),
});

export default store;
