import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
} from "../types/listingTypes";

const initialState = {
  listings: [], // Ensure 'listings' is consistently used
  loading: false,
  error: null, // Initialize error state
};

export const listingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTING_LIST_REQUEST:
      return { ...state, loading: true }; // Keep previous state intact

    case LISTING_LIST_SUCCESS:
      return { ...state, loading: false, listings: action.payload }; // Update listings

    case LISTING_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }; // Update error

    default:
      return state;
  }
};
