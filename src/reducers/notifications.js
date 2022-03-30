import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../tills/actionTypes";

const initialState = [];

export default function notifications(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTIFICATION:
      return [...state, payload];
    case REMOVE_NOTIFICATION:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
}
