import { COLOR_MODE_ACTIONS } from "./color-mode.types";

const COLOR_MODE_INITIAL_STATE = {
  usingDarkMode: true,
};

export function colorModeReducer(state = COLOR_MODE_INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case COLOR_MODE_ACTIONS.TOGGLE_COLOR_MODE:
      return { ...state, usingDarkMode: payload };

    default:
      return state;
  }
}
