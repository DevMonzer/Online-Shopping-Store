import USER_ACTION_TYPES from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

/*
  
  The createAction is responsible for cretating an action with the given payload
  
*/
