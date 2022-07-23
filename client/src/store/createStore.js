import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import utilReducer from "./util/reducer";
import watchlistReducer from "./watchlist/reducer";

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const middleware = [thunk];
const enhancers = [devToolsExtension()];

const allReducers = combineReducers({
  util: utilReducer,
  watchlist: watchlistReducer,
});

const store = createStore(
  allReducers,
  compose(applyMiddleware(...middleware), ...enhancers)
);

export default store;
