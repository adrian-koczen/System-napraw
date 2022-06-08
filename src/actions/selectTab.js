import { SELECTTAB, SELECTSETTINGSTAB } from "../utills/actionTypes";

export const selectTab = (ID) => async (dispatch) => {
  try {
    if (ID == null) {
      return dispatch({
        type: SELECTTAB,
        payload: { id: 0 },
      });
    }
    dispatch({
      type: SELECTTAB,
      payload: ID,
    });
  } catch (error) {
    console.log(error);
  }
};

export const selectSettingsTab = (ID) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTSETTINGSTAB,
      payload: ID,
    });
  } catch (error) {
    console.log(error);
  }
};
