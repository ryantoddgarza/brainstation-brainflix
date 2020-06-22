import React from 'react';
import logo from '../../../static/logo.svg';
import SearchInput from './molecules/SearchInput';

const Masthead = () => {
  return (
    <div className="masthead">
      <div className="container masthead__content">
        <div className="masthead__start">
        <img src={logo} alt="logo" />
        </div>
      <div className="masthead__end">
        <SearchInput />
        <div className="masthead__user-panel">
          <button className="masthead__upload-btn cta">Upload</button>
          <div className="masthead__user-avatar-wrapper">
            <img className="masthead__user-avatar" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Masthead;
