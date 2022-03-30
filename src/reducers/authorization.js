import { LOADUSER, NO_TOKEN, LOGOUT } from "../tills/actionTypes";

export default function authorization(
  state = { isAuthenticated: false, loading: true },
  action
) {
  const { payload, type } = action;
  switch (type) {
    case LOADUSER:
      return payload;
    case NO_TOKEN:
      return payload;
    case LOGOUT:
      return payload;
    default:
      return state;
  }
}
