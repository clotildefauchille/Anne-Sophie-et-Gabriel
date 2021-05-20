/* eslint-disable arrow-body-style */
import React from 'react';
import './style.scss';
import Menu from 'src/components/Menu';
import {
  isMobile,
} from 'react-device-detect';

const Header = () => {
  if (isMobile) {
    return (
      <div className="header">
        <h1 className="header__title">Anne-Sophie & Gabriel</h1>
        <div className="header__date">11 Septembre 2021</div>
      </div>
    );
  }
  return (
    <div className="header">
      <Menu />
      <h1 className="header__title">Anne-Sophie & Gabriel</h1>
      <div className="header__date">11 Septembre 2021</div>
    </div>
  );
};


export default Header;
