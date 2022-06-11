import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { SearchText, SearchForm } from "./search.style";

const Search = ({ onChange }) => {
  return (
    <SearchForm role="search">
      <IoSearchOutline className="form__icon" />
      <SearchText
        onChange={onChange}
        name="search"
        type="search"
        placeholder="Search"
      />
    </SearchForm>
  );
};

Search.propTypes = {
  onChange: PropTypes.func,
};

Search.defaultProps = {
  onChange: () => {},
};

export default Search;
