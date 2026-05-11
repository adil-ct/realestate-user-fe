import { InputContainer, Input } from "./SearchInput.styles";

function SearchInput({value, handleChange}) {

  return (
    <InputContainer>
      <Input
        type="text"
        autoCorrect="false"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
}

export default SearchInput;
