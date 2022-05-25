import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GameSearchContainer,
  SearchInput,
  SearchButton,
} from "./game-search.styles";

function GameSearch() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!value) {
      navigate("/search");
    }

    navigate(`/search/${value}`);
  };

  return (
    <GameSearchContainer onSubmit={submitHandler}>
      <SearchInput
        value={value}
        onChange={changeHandler}
        placeholder='search'
      />

      <SearchButton type='submit' />
    </GameSearchContainer>
  );
}

export default GameSearch;
