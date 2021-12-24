import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchForm, SearchInput } from "./style";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    history.push(`/search/${query}`);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search games"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <BsSearch />
    </SearchForm>
  );
};

export default SearchBar;
