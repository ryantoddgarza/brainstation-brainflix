import React, { Component } from 'react';
import IconSearch from '../atoms/IconSearch';

class SearchInput extends Component {
  render() {
    return (
      <div className="input masthead__search-field">
        <IconSearch />
        <input className="masthead__search-input"
          type="search"
          placeholder="Search" />
      </div>
    )
  }
}

export default SearchInput;

