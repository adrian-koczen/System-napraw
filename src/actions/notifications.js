import { v4 as uuidv4 } from "uuid";
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../utills/actionTypes";

export const addNotification =
  (notificationMessage, notificationType) => (dispatch) => {
    const id = uuidv4();
    setTimeout(() => {
      dispatch({
        type: REMOVE_NOTIFICATION,
        payload: id,
      });
    }, 3500);
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        notificationMessage: notificationMessage,
        notificationType: notificationType,
        id: id,
      },
    });
  };

export const removeNotify = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_NOTIFICATION,
    payload: id,
  });
};
