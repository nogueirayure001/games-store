import React, { useState, useRef } from "react";
import RenderIf from "../render-if/render-if";
import {
  FormInputContainer,
  ErrorCode,
  InputAndLabelContainer,
  InputGuideList,
  GuideListItem,
} from "./form-input.styles";

function FormInput({
  label,
  id,
  shrink,
  pattern,
  submitted,
  errorMessage,
  inputGuide,
  ...otherProps
}) {
  const [lostFocus, setLostFocus] = useState(false);
  const [gotFocused, setGotFocused] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  const inputRef = useRef(null);
  const showErrorMessage = () => {
    const { value } = inputRef.current;

    return !value.match(pattern);
  };

  const errorMessageActive = (lostFocus || submitted) && showErrorMessage();

  const blurHandler = () => {
    if (!lostFocus) setLostFocus(true);
  };

  const focusHandler = () => {
    if (!gotFocused) setGotFocused(true);
  };

  const inputHandler = (event) => {
    if (!inputGuide) return;

    const { value } = event.target;

    const inputValid = inputGuide.every(({ regex }) => value.match(regex));

    if (inputValid && showGuide) {
      setShowGuide(false);
    } else if (!inputValid && !showGuide) {
      setShowGuide(true);
    }
  };

  return (
    <FormInputContainer errorMessage={errorMessageActive}>
      <InputAndLabelContainer shrink={shrink}>
        <input
          id={id}
          {...otherProps}
          pattern={pattern}
          onBlur={pattern && blurHandler}
          onFocus={inputGuide && focusHandler}
          onInput={inputHandler}
          ref={inputRef}
        />

        <label htmlFor={id}>{label}</label>
      </InputAndLabelContainer>

      <RenderIf condition={errorMessageActive}>
        <ErrorCode>{errorMessage}</ErrorCode>
      </RenderIf>

      <RenderIf condition={inputGuide && showGuide && gotFocused}>
        <InputGuideList>
          {inputGuide?.map(({ tip, regex, id }) => {
            return inputRef.current?.value.match(regex) ? (
              <GuideListItem key={id} match>
                {tip}
              </GuideListItem>
            ) : (
              <GuideListItem key={id}>{tip}</GuideListItem>
            );
          })}
        </InputGuideList>
      </RenderIf>
    </FormInputContainer>
  );
}

export default FormInput;
