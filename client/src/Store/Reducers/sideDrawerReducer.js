import { SIDEDRAWEROPEN, SIDEDRAWERCLOSE } from "../Actions/sideDrawerAction";

const initialState = {
  drawerIsOpen: false,
};

const sideDrawerReducer = (state = initialState, actions) => {
  if (actions.type === SIDEDRAWEROPEN) {
    return {
      ...state,
      drawerIsOpen: true,
    };
  }
  if (actions.type === SIDEDRAWERCLOSE) {
    return {
      ...state,
      drawerIsOpen: "close",
    };
  }
  return state;
};

export default sideDrawerReducer;
