/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import './style.scss';
import agendaNav from 'src/assets/svg/agendaNav.svg';
import gift from 'src/assets/svg/gift.svg';
import question from 'src/assets/svg/question.svg';
import map from 'src/assets/svg/map.svg';
import confirmation from 'src/assets/svg/confirmation.svg';
import { NavLink } from 'react-router-dom';
// import ActiveMenu from 'src/components/ActiveMenu';
import activeMenu from 'src/assets/svg/activeMenu.svg';
import LogoutButton from 'src/components/LogoutButton';
// import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__navbar-element">
          <NavLink to="/" exact activeClassName="header__selected">
            <img className="header__icon" alt="agenda" src={agendaNav} />
            {/* <ActiveMenu className="header__highlight" width="100" height="4" /> */}
            <img className="header__highlight" src={activeMenu} />
          </NavLink>
          <NavLink to="/confirmation" exact activeClassName="header__selected">
            <img
              className="header__icon"
              src={confirmation}
              alt="confirmation"
            />
            <img className="header__highlight" src={activeMenu} />
          </NavLink>
          <NavLink to="/infos" exact activeClassName="header__selected">
            <img className="header__icon" src={map} alt="info pratique" />
            <img className="header__highlight" src={activeMenu} />
          </NavLink>
          <NavLink to="/questions" exact activeClassName="header__selected">
            <img className="header__icon" src={question} alt="info pratique" />
            <img className="header__highlight" src={activeMenu} />
          </NavLink>
          <NavLink to="/cadeau" exact activeClassName="header__selected">
            <img className="header__icon" src={gift} alt="cadeaux" />
            <img className="header__highlight" src={activeMenu} />
          </NavLink>
        </div>
        <h1 className="header__title">Anne-Sophie & Gabriel</h1>
        <LogoutButton />
      </div>

      {/* <h2>Bonjour {user.name}!</h2> */}
    </div>
  );
};

export default Header;
