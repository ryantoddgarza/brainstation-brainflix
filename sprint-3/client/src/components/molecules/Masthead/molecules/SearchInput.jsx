import React from 'react';
import IconSearch from '../atoms/IconSearch';

const SearchInput = () => {
  return (
    <div className="input masthead__search-field">
      <IconSearch />
      <input className="masthead__search-input"
        type="search"
        placeholder="Search" />
    </div>
  )
}

export default SearchInput;

