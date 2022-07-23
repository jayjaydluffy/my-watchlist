import * as types from "./types";

const initialState = {
  watchlist: [],
  fetching: false,
  fetched: false,
  fetchingError: false,
  selectedShow: null,
  isAddNew: false,
  show: {},
  fetchingShow: false,
  fetchedShow: false,
  fetchingShowError: false,
  addingShow: false,
  addedShow: false,
  addShowError: false,
};

function watchlistReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_WATCHLIST_START:
      return {
        ...state,
        fetching: true,
        fetched: false,
        fetchingError: false,
      };
    case types.FETCH_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: [...state.watchlist, ...action.payload],
        fetching: false,
        fetched: true,
      };
    case types.FETCH_WATCHLIST_FAIL:
      return {
        ...state,
        fetching: false,
        fetched: false,
        fetchingError: true,
      };
    case types.SELECT_SHOW:
      return {
        ...state,
        selectedShow: action.payload,
        isAddNew: false,
        fetchedShow: action.payload === state.selectedShow,
      };
    case types.ADD_NEW_SHOW:
      return {
        ...state,
        selectedShow: null,
        isAddNew: true,
      };
    case types.CANCEL_ADD_SHOW:
      return {
        ...state,
        selectedShow: null,
        isAddNew: false,
      };
    case types.FETCH_SHOW_START:
      return {
        ...state,
        fetchingShow: true,
        fetchedShow: false,
        fetchingShowError: false,
      };
    case types.FETCH_SHOW_SUCCESS:
      return {
        ...state,
        fetchingShow: false,
        fetchedShow: true,
        fetchingShowError: false,
        show: {
          ...state.show,
          [action.payload.showId]: action.payload.data,
        },
      };
    case types.FETCH_SHOW_FAIL:
      return {
        ...state,
        fetchingShow: false,
        fetchedShow: false,
        fetchingShowError: true,
      };
    case types.ADD_SHOW_START:
      return {
        ...state,
        addingShow: true,
        addedShow: false,
        addShowError: false,
      };
    case types.ADD_SHOW_SUCCESS:
      return {
        ...state,
        addingShow: false,
        addedShow: true,
        addShowError: false,
        selectedShow: action.payload,
        isAddNew: false,
        fetchedShow: false
      };
    case types.ADD_SHOW_FAIL:
      return {
        ...state,
        addingShow: false,
        addedShow: false,
        addShowError: true,
      };
    default:
      return state;
  }
}

export default watchlistReducer;
