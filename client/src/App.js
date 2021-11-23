import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Backdrop from "./Components/Backdrop/Backdrop";
import Navigation from "./Components/Navigation/Navigation";
import Datalist from "./Components/Datalist/Datalist";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Components/Modal/Modal";

const App = () => {
  const backDropStatus = useSelector(
    (...state) => state[0].backDropReducer.visible
  );

  const isDrawerOpen = useSelector(
    (...state) => state[0].sideDrawerReducer.drawerIsOpen
  );

  const { ...isModalOpen } = useSelector((state) => state);
  console.log(isModalOpen.modalReducer.show);

  return (
    <Router>
      {backDropStatus && isDrawerOpen ? <Backdrop /> : null}
      <Navigation />
      {isModalOpen.modalReducer.show ? (
        <Modal />
      ) : isModalOpen.modalReducer.show === false ? null : null}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main>
        <Switch>
          <Route path="/" exact component={Datalist} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Route path="/add" exact component={Modal} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
