import React from 'react';
import './style.scss';
import agendaNav from 'src/assets/svg/agendaNav.svg';
import gift from 'src/assets/svg/gift.svg';
import bed from 'src/assets/svg/bed.svg';
import confirmation from 'src/assets/svg/confirmation.svg';
import { NavLink } from 'react-router-dom';
import ActiveMenu from 'src/components/ActiveMenu';
import activeMenu from 'src/assets/svg/activeMenu.svg';

const Header = () => (
  <div className="header">
    <div className="header__navbar">
      <div className="header__navbar-element">

      <NavLink to="/" exact activeClassName="header__selected">
          <img className="header__icon" alt="agenda" src={agendaNav} />
          {/* <ActiveMenu className="header__highlight" width="100" height="4" /> */}
          <img className="header__highlight" src={activeMenu} /> 
      </NavLink>
      <NavLink to="/confirmation" exact activeClassName="header__selected">
        <img className="header__icon" src={confirmation} alt="confirmation" />
        <img className="header__highlight" src={activeMenu} />
      </NavLink>
      <NavLink to="/infos" exact activeClassName="header__selected">
        <img className="header__icon" src={bed} alt="info pratique" />
        <img className="header__highlight" src={activeMenu} />
      </NavLink>
      <NavLink to="/cadeau" exact activeClassName="header__selected">
        <img className="header__icon" src={gift} alt="cadeaux" />
        <img className="header__highlight" src={activeMenu} />
      </NavLink>
    </div>
    <h1 className="header__title">Anne-Sophie & Gabriel</h1>
    </div>
  </div>
);

export default Header;
