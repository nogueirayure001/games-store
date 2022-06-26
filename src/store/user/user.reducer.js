import { USER_ACTIONS } from "./user.types";

const INITIAL_STATE = {
  user: null,
};

export function userReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS.SET_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
}
