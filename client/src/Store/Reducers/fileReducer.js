import { FILESUCCESS, FILEFAILURE } from "../Actions/fileAction";

const initialState = {
  success: false,
};

const fileReducer = (state = initialState, action) => {
  if (action.type === FILESUCCESS) {
    return {
      ...state,
      success: true,
    };
  } else {
    return state;
  }
};

export default fileReducer;
