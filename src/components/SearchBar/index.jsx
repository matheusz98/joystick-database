import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchForm, SearchInput } from "./style";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    navigate.push(`/search/${query}`);
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
