import React from 'react';
import activeMenu from 'src/assets/svg/activeMenu.svg';
import profile from 'src/assets/svg/profile.svg';
import agendaNav from 'src/assets/svg/agendaNav.svg';
import gift from 'src/assets/svg/gift.svg';
import question from 'src/assets/svg/question.svg';
import map from 'src/assets/svg/map.svg';
import response from 'src/assets/svg/response.svg';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { MobileView } from 'react-device-detect';

const Menu = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="header__navbar">
      <NavLink to="/" exact activeClassName="header__selected">
        <img className="header__icon" alt="agenda" src={agendaNav} />
        <img className="header__highlight" src={activeMenu} />
      </NavLink>
      <NavLink to="/confirmation" exact activeClassName="header__selected">
        <img className="header__icon" src={response} alt="confirmation" />
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
      <MobileView>
        <div className="header__dropdown">
          <button type="button" alt="profil" className="header__profile-btn">
            <img className="header__icon-profile" alt="disconnect" src={profile} />
            <img className="header__highlight" src={activeMenu} />
          </button>
          <div className="header__dropdown-content">
            <div className="header__name">{user.name}</div>
            <button
              className="header__logout"
              type="button"
              alt="logout Button"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Déconnexion
            </button>
          </div>
        </div>
      </MobileView>
    </div>
  );
};

export default Menu;
