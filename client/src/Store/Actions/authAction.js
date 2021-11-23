import axios from "axios";

export const register = async (user) => {
  return await axios.post(`${process.env.REACT_APP_API}/register`, user);
};

export const login = async (user) => {
  return await axios.post(`${process.env.REACT_APP_API}/login`, user);
};

export const LOGGED_IN_USER = "LOGGED_IN_USER";
export const LOGGED_OUT_USER = "LOGGED_OUT_USER";
