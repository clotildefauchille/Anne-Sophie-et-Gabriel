/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import './style.scss';
import agendaNav from 'src/assets/svg/agendaNav.svg';
import gift from 'src/assets/svg/gift.svg';
import question from 'src/assets/svg/question.svg';
import map from 'src/assets/svg/map.svg';
import response from 'src/assets/svg/response.svg';
import { NavLink } from 'react-router-dom';
import profile from 'src/assets/svg/profile.svg';
import PropTypes from 'prop-types';
import activeMenu from 'src/assets/svg/activeMenu.svg';

const Header = ({ showLoginModal }) => {
  const handleClickCreateActivity = (e) => {
    e.preventDefault();
    showLoginModal();
  };
  return (
    <div className="header">
      {/* <div className="header__navbar"> */}
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
        <button onClick={handleClickCreateActivity} type="button" alt="profil" className="header__profile">
          <img className="header__icon" alt="disconnect" src={profile} />
          <img className="header__highlight" src={activeMenu} />
        </button>
      </div>
      <h1 className="header__title">Anne-Sophie & Gabriel</h1>
      <div className="header__date">11 Septembre 2021</div>
    </div>
  );
};

Header.propTypes = {
  showLoginModal: PropTypes.func.isRequired,
};

export default Header;
