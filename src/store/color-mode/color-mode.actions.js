import { store } from "../store";
import { createAction } from "../../utils/helper-functions";
import { COLOR_MODE_ACTIONS } from "./color-mode.types";

export function toggleColorMode() {
  const { usingDarkMode } = store.getState().colorMode;

  return createAction(COLOR_MODE_ACTIONS.TOGGLE_COLOR_MODE, !usingDarkMode);
}
