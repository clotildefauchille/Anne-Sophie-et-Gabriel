import React from 'react';
import './style.scss';
import agendaNav from 'src/assets/svg/agendaNav.svg';
import gift from 'src/assets/svg/gift.svg';
import bed from 'src/assets/svg/bed.svg';
import confirmation from 'src/assets/svg/confirmation.svg';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="header__navbar">
      <NavLink to="/" exact activeClassName="header__selected">
        <img className="header__icon" alt="agenda" src={agendaNav} />
      </NavLink>
      <NavLink to="/confirmation" exact activeClassName="header__selected">
        <img className="header__icon" src={confirmation} alt="confirmation" />
      </NavLink>
      <NavLink to="/infos" exact activeClassName="header__selected">
        <img className="header__icon" src={bed} alt="info pratique" />
      </NavLink>
      <NavLink to="/cadeau" exact activeClassName="header__selected">
        <img className="header__icon" src={gift} alt="cadeaux" />
      </NavLink>
    </div>
    <h1 className="header__title">Anne-Sophie & Gabriel</h1>
  </div>
);

export default Header;
