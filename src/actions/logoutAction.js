import { LOGOUT } from "../tills/actionTypes";

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("x-auth-token");
  dispatch({
    type: LOGOUT,
    payload: { isAuthenticated: false },
  });
};
