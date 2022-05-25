import { useState, useRef } from "react";
import { useClickOutsideCloser } from "../../custom-hooks/use-click-outside-closer";
import Button from "../button/button";

import {
  Select,
  SelectOptionsContainer,
  OptionContainer,
} from "./select-option.styles";

function SelectOption({ selection, options, multiple, ...otherProps }) {
  const [isHidden, setIsHidden] = useState(true);

  const optionsRef = useRef(null);
  const showOptionsRef = useRef(null);

  const toggleShowingHandler = () => {
    setIsHidden(!isHidden);
  };

  useClickOutsideCloser(
    !isHidden,
    toggleShowingHandler,
    optionsRef,
    showOptionsRef
  );

  return (
    <Select>
      <Button
        type='button'
        buttonStyle='normalDarker'
        onClick={toggleShowingHandler}
        insideRef={showOptionsRef}
      >
        {selection.replace(/[^a-z]/gi, " ")}
      </Button>

      <SelectOptionsContainer isHidden={isHidden} ref={optionsRef}>
        {options.map(({ name, id, value }) =>
          multiple ? (
            <OptionContainer key={id}>
              <input
                type='checkbox'
                id={id}
                value={id}
                name={selection}
                {...otherProps}
              />

              <label htmlFor={id}>{name.toUpperCase()}</label>
            </OptionContainer>
          ) : (
            <OptionContainer key={name}>
              <input
                type='radio'
                id={name}
                value={value}
                name={selection}
                {...otherProps}
              />

              <label htmlFor={name}>{name.toUpperCase()}</label>
            </OptionContainer>
          )
        )}
      </SelectOptionsContainer>
    </Select>
  );
}

export default SelectOption;
