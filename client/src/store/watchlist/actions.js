import * as types from "./types";

export const fetchWatchlist = () => async (dispatch) => {
  dispatch({ type: types.FETCH_WATCHLIST_START });
  try {
    const response = await fetch("/api/watchlist");
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      dispatch({ type: types.FETCH_WATCHLIST_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: types.FETCH_WATCHLIST_FAIL });
    console.log(error.response);
  }
};

export const selectShow = (showId) => ({
  type: types.SELECT_SHOW,
  payload: showId,
});

export const addNewShow = () => ({
  type: types.ADD_NEW_SHOW,
});

export const cancelAddshow = () => ({
  type: types.CANCEL_ADD_SHOW,
});

export const fetchShow = (showId) => async (dispatch) => {
  dispatch({ type: types.FETCH_SHOW_START });
  try {
    const response = await fetch(`/api/watchlist/${showId}`);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      dispatch({ type: types.FETCH_SHOW_SUCCESS, payload: { data, showId } });
    }
  } catch (error) {
    dispatch({ type: types.FETCH_SHOW_FAIL });
    console.log(error.response);
  }
};

export const addShow = (showData) => async (dispatch) => {
  dispatch({ type: types.ADD_SHOW_START });
  try {
    const response = await fetch(`/api/watchlist`, {
      method: "POST",
      body: JSON.stringify(showData),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      dispatch({ type: types.ADD_SHOW_SUCCESS, payload: data?.insertedId});
    }
  } catch (error) {
    dispatch({ type: types.ADD_SHOW_FAIL });
    console.log(error.response);
  }
};
