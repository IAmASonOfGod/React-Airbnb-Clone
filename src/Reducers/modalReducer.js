import { OPEN_MODAL } from "../types/modalTypes";

const initialState = { openClose: "closed", content: "" };

export const modalReducer = (state = initialState, action) => {
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      openClose: action.payload.openClose,
      content: action.payload.content,
    };
  }
  return state;
};
