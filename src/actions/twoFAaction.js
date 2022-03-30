import axios from "axios";
import { NO_TOKEN, LOADUSER } from "../tills/actionTypes";

export const twoFA = (code) => async (dispatch) => {
  let token = localStorage.getItem("x-auth-token");
  if (!token) {
    console.log("No token!");
    return dispatch({
      type: NO_TOKEN,
      payload: { isAuthenticated: false },
    });
  }
  let config = {
    headers: {
      "x-auth-token": token,
    },
  };
  const verify = await axios.post(
    "https://panel-api.koczenadrian.pl/api/verify2FA",
    {
      verifycode: code,
    },
    config
  );
  if (verify) {
    let request = await axios.post(
      "https://panel-api.koczenadrian.pl/api/loaduser",
      null,
      config
    );
    dispatch({
      type: LOADUSER,
      payload: {
        user: request.data.payload,
        isAuthenticated: true,
        loading: false,
      },
    });
  }
  try {
  } catch (error) {
    console.log(error);
  }
};
