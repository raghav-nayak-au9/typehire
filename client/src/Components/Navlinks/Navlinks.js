import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { SIDEDRAWERCLOSE } from "../../Store/Actions/sideDrawerAction";
// import { BACKDROPNOTVISIBLE } from "../../Store/Actions/backdropAction";
import { useSelector } from "react-redux";
import { LOGGED_OUT_USER } from "../../Store/Actions/authAction";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { MODALOPEN } from "../../Store/Actions/modalActions";

const NavLinks = () => {
  const { ...auth } = useSelector((state) => state);

  const history = useHistory();
  const dispatch = useDispatch();

  // const loginClickHandler = () => {
  //   dispatch({ type: SIDEDRAWERCLOSE });
  //   dispatch({ type: BACKDROPNOTVISIBLE });
  // };

  // const registerClickHandler = () => {
  //   dispatch({ type: SIDEDRAWERCLOSE });
  //   dispatch({ type: BACKDROPNOTVISIBLE });
  // };

  const logoutHandler = () => {
    dispatch({ type: LOGGED_OUT_USER, payload: null });
    window.localStorage.removeItem("auth");

    toast.success("Logout Successfully!!!");
    history.push("/signin");
  };

  const addDataHandler = () => {
    dispatch({ type: MODALOPEN });
  };

  return (
    <ul className="nav-links">
      {auth.authReducer == null ? (
        <>
          <li>
            <NavLink to="/signin">LOGIN</NavLink>
          </li>
          <li>
            <NavLink to="/signup">REGISTER</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/add" onClick={addDataHandler}>
              ADD DATA
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" onClick={logoutHandler}>
              LOG OUT
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
