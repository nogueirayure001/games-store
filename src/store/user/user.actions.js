import { createAction } from "../../utils/helper-functions";
import { USER_ACTIONS } from "./user.types";

export function setCurrentUser(user) {
  return createAction(USER_ACTIONS.SET_USER, { user });
}
