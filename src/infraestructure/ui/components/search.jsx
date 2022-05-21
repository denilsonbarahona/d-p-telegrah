import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { SearchText, SearchForm } from "@styles/components/search.style";

const Search = () => {
  return (
    <SearchForm role="search">
      <IoSearchOutline className="form__icon" />
      <SearchText type="search" placeholder="Search" />
    </SearchForm>
  );
};

export default Search;
