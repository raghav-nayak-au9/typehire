import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../../Store/Actions/authAction";
import Loginform from "../Loginform/Loginform";
import { useDispatch } from "react-redux";
import { LOGGED_IN_USER } from "../../Store/Actions/authAction";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA", { email, password });
    try {
      let res = await login({ email, password });
      if (res.data) {
        window.localStorage.setItem("auth", JSON.stringify(res.data));

        dispatch({
          type: LOGGED_IN_USER,
          paylaod: res.data,
        });
      }
      toast.success("Login Successfully!!!");
      history.push("/");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Login Page</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Loginform
              handleSubmit={handleSubmit}
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
