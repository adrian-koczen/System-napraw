import { LOGIN_USER_SUCCESS } from "../utills/actionTypes";

export default function userdata(state = {}, action) {
  const { payload, type } = action;
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return payload;
    default:
      return state;
  }
}
