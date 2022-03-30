import axios from "axios";
import { LOGIN_USER_SUCCESS, LOADUSER } from "../tills/actionTypes";

export const loginAction = (formData) => async (dispatch) => {
  const { login, password } = formData;
  try {
    let data = await axios.post(
      "https://panel-api.koczenadrian.pl/api/signin",
      {
        email: login,
        password: password,
      }
    );
    localStorage.setItem("x-auth-token", data.data.Token);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: { token: data.data.Token },
    });
    let config = {
      headers: {
        "x-auth-token": data.data.Token,
      },
    };
    let user = await axios.post(
      "https://panel-api.koczenadrian.pl/api/loaduser",
      null,
      config
    );
    if (user.data.payload.is2FA) {
      return dispatch({
        type: LOADUSER,
        payload: { isAuthenticated: false, loading: true, waitForCode: true },
      });
    }
    dispatch({
      type: LOADUSER,
      payload: { isAuthenticated: true, loading: true },
    });
  } catch (error) {
    console.log(error.message);
  }
};
