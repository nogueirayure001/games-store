import React from "react";
import { FormInputContainer } from "./form-input.styles";

function FormInput({ label, id, shrink, ...otherProps }) {
  return (
    <FormInputContainer shrink={shrink}>
      <input id={id} {...otherProps} />
      <label htmlFor={id}>{label}</label>
    </FormInputContainer>
  );
}

export default FormInput;
