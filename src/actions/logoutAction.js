import { LOGOUT } from "../utills/actionTypes";

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("x-auth-token");
  dispatch({
    type: LOGOUT,
    payload: { isAuthenticated: false },
  });
};
