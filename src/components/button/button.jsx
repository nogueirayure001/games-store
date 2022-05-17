import { CustomButtom } from "./button.styles";

const CUSTOM_BUTTONS = {
  default: "no-styles",
  normal: "normal",
};

function Button({ children, buttonStyle = "default", ...otherProps }) {
  return (
    <CustomButtom customStyle={CUSTOM_BUTTONS[buttonStyle]} {...otherProps}>
      {children}
    </CustomButtom>
  );
}

export default Button;
