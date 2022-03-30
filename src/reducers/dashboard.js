import { SELECTTAB, SELECTSETTINGSTAB } from "../tills/actionTypes";

const defaultState = {
  id: 0,
  settingsTabID: 0,
};

export const dashboard = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECTTAB:
      return { ...state, id: payload };
    case SELECTSETTINGSTAB:
      return { ...state, settingsTabID: payload };
    default:
      return state;
  }
};
