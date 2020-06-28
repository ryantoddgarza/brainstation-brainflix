import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from './molecules/SearchInput';
import UploadButton from './molecules/UploadButton';
import UserAvatar from '../../atoms/UserAvatar';
import logo from '../../../static/logo.svg';
import usrImg from '../../../assets/images/Mohan-muruge.jpg';

const Masthead = () => {
  return (
    <div className="masthead">
      <div className="container masthead__content">
        <div className="masthead__start">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="masthead__end">
          <SearchInput />
          <div className="masthead__user-panel">
            <Link to="/upload">
              <UploadButton />
            </Link>
            <div className="masthead__user-avatar-wrapper">
              <UserAvatar src={usrImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Masthead;
