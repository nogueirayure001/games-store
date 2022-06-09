import React from "react";
import { CustomButtom } from "./button.styles";

const CUSTOM_BUTTONS = {
  default: "no-styles",
  normal: "normal",
  normalDarker: "normalDarker",
  normalDarkerInverted: "normalDarkerInverted",
  googleColors: "googleColors",
};

function Button({
  children,
  insideRef,
  buttonStyle = "default",
  ...otherProps
}) {
  return (
    <CustomButtom
      ref={insideRef}
      customStyle={CUSTOM_BUTTONS[buttonStyle]}
      {...otherProps}
    >
      {children}
    </CustomButtom>
  );
}

export default Button;
