import axios from "axios";

import { START_LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from "./actionTypes";

export const startLogin = () => ({
  type: START_LOGIN,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error.response ? error.response.data : "error",
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

// SIDE EFFECTS
export function login(email, password, history) {
  return (dispatch) => {
    dispatch(startLogin());
    const user = {
      user: {
        email: email,
        password: password,
      },
    };
    axios
      .post("http://127.0.0.1:3000/users/sign_in", user)
      .then((response) => {
        dispatch(loginSuccess());
        history.push("/users");
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}
