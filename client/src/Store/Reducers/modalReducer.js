import { MODALOPEN, MODALCLOSE } from "../Actions/modalActions";

const initialState = {
  show: null,
};

const modalReducer = (state = initialState, action) => {
  if (action.type === MODALOPEN) {
    return {
      ...state,
      show: true,
    };
  } else if (action.type === MODALCLOSE) {
    return {
      ...state,
      show: false,
    };
  } else {
    return state;
  }
};

export default modalReducer;
