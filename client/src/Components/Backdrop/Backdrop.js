import { useDispatch } from "react-redux";
import { SIDEDRAWERCLOSE } from "../../Store/Actions/sideDrawerAction";
import { BACKDROPNOTVISIBLE } from "../../Store/Actions/backdropAction";

import "./Backdrop.css";

const Backdrop = () => {
  const dispatch = useDispatch();

  const closeDrawerHandler = () => {
    dispatch({ type: SIDEDRAWERCLOSE });
    dispatch({ type: BACKDROPNOTVISIBLE });
  };
  return <div className="backdrop" onClick={closeDrawerHandler}></div>;
};

export default Backdrop;
