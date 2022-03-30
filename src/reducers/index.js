import { combineReducers } from "redux";
import authorization from "./authorization";
import userdata from "./userdata";
import notifications from "./notifications";

export const rootReducer = combineReducers({
  authorization,
  userdata,
  notifications,
});
