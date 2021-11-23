import { BACKDROPVISIBLE, BACKDROPNOTVISIBLE } from "../Actions/backdropAction";

const initialState = {
  visible: false,
};

const backDropReducer = (state = initialState, actions) => {
  if (actions.type === BACKDROPVISIBLE) {
    return {
      ...state,
      visible: true,
    };
  } else if (actions.type === BACKDROPNOTVISIBLE) {
    return {
      ...state,
      visible: false,
    };
  } else {
    return state;
  }
};

export default backDropReducer;
