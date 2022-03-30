import { LOADUSER, NO_TOKEN } from "../tills/actionTypes";
import axios from "axios";

export const authorizationAction = () => async (dispatch) => {
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
  try {
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
  } catch (error) {
    dispatch({
      type: NO_TOKEN,
      payload: { isAuthenticated: false, loading: true },
    });
  }
};
