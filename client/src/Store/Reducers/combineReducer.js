import { combineReducers } from "redux";
import sideDrawerReducer from "../Reducers/sideDrawerReducer";
import backDropReducer from "../Reducers/backdropReducer";
import authReducer from "../Reducers/authReducer";
import modalReducer from "../Reducers/modalReducer";
import fileReducer from "../Reducers/fileReducer";

const reducers = combineReducers({
  sideDrawerReducer,
  backDropReducer,
  authReducer,
  modalReducer,
  fileReducer,
});

export default reducers;
