import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
} from "../types/listingTypes";
import axios from "axios";

export const listListing = () => async (dispatch) => {
  try {
    dispatch({ type: LISTING_LIST_REQUEST });

    const response = await axios.get(
      "https://react-airbnb-clone-backend.onrender.com/listings"
    );
    console.log("Axios response data:", response.data); // Log the response data here

    dispatch({ type: LISTING_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: LISTING_LIST_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
