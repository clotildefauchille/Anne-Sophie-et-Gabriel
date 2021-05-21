/* eslint-disable arrow-body-style */
import React from 'react';
import './style.scss';
import Menu from 'src/components/Menu';
import { isMobile } from 'react-device-detect';
import profile from 'src/assets/svg/profile.svg';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { user } = useAuth0();

  if (isMobile) {
    return (
      <div className="header">
        <h1 className="header__title">Anne-Sophie & Gabriel</h1>
        <h2 className="header__date">11 Septembre 2021</h2>
      </div>
    );
  }
  return (
    <div className="header">
      <Menu />
      <h1 className="header__title">Anne-Sophie & Gabriel</h1>
      <div className="header__container-date-profile">
        <h2 className="header__date">11 Septembre 2021</h2>
        <div className="header__dropdown">
          <button type="button" alt="profil" className="header__profile-btn">
            <img className="header__icon" alt="disconnect" src={profile} />
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
      </div>
    </div>
  );
};

export default Header;
