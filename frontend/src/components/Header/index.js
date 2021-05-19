/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import './style.scss';
import Menu from 'src/components/Menu';
import PropTypes from 'prop-types';
import {
  isMobile,
} from 'react-device-detect';

const Header = ({ showLoginModal }) => {
  // const handleClickCreateActivity = (e) => {
  //   e.preventDefault();
  //   showLoginModal();
  // };
  if (isMobile) {
    return (
      <div className="header">
        {/* <Menu /> */}
        {/* <div className="header__navbar"> */}
        <h1 className="header__title">Anne-Sophie & Gabriel</h1>
        <div className="header__date">11 Septembre 2021</div>
      </div>
    );
  }
  return (
    <div className="header">
      <Menu />
      {/* <div className="header__navbar"> */}
      <h1 className="header__title">Anne-Sophie & Gabriel</h1>
      <div className="header__date">11 Septembre 2021</div>
    </div>
  );
};

Header.propTypes = {
  showLoginModal: PropTypes.func.isRequired,
};

export default Header;
