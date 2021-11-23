import "./Navigation.css";
import { Link } from "react-router-dom";
import NavLinks from "../Navlinks/Navlinks";
import React from "react";
import Header from "../Header/Header";
import SideDrawer from "../Sidedrawer/Sidedrawer";
import { useSelector, useDispatch } from "react-redux";
import { SIDEDRAWEROPEN } from "../../Store/Actions/sideDrawerAction";
import { BACKDROPVISIBLE } from "../../Store/Actions/backdropAction";

const Navigation = () => {
  const dispatch = useDispatch();

  const drawerIsOpen = useSelector(
    (...state) => state[0].sideDrawerReducer.drawerIsOpen
  );

  // console.log(draw erIsOpen);

  const openDrawerHandler = () => {
    dispatch({ type: SIDEDRAWEROPEN });
    dispatch({ type: BACKDROPVISIBLE });
  };

  return (
    <React.Fragment>
      {drawerIsOpen ? (
        <SideDrawer classes={drawerIsOpen}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      ) : drawerIsOpen === "close" ? (
        <SideDrawer classes={drawerIsOpen}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      ) : drawerIsOpen === false ? (
        <SideDrawer classes={drawerIsOpen}></SideDrawer>
      ) : null}

      <Header>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h3 className="main-navigation__title">
          <Link to="/">FINANCEPEER</Link>
        </h3>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default Navigation;
