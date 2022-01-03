import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchForm, SearchInput } from "./style";

const SearchBar = () => {
  const [pattern, setPattern] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    history.push(`/search/${pattern}`);
  };

  return (
    <SearchForm onSubmit={submitHandler}>
      <SearchInput
        type="search"
        placeholder="Search..."
        onChange={(e) => {
          setPattern(e.target.value);
        }}
      />
    </SearchForm>
  );
};

export default SearchBar;
