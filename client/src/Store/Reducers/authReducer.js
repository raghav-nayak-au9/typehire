import { LOGGED_IN_USER, LOGGED_OUT_USER } from "../Actions/authAction";

let userState;

if (window.localStorage.getItem("auth")) {
  userState = JSON.parse(window.localStorage.getItem("auth"));
} else {
  userState = null;
}

const authReducer = (state = userState, action) => {
  if (action.type === LOGGED_IN_USER) {
    return { ...state, ...action.payload };
  } else if (action.type === LOGGED_OUT_USER) {
    return action.payload;
  } else {
    return state;
  }
};

export default authReducer;
