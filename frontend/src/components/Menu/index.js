import React from 'react';
import activeMenu from 'src/assets/svg/activeMenu.svg';
import profile from 'src/assets/svg/profile.svg';
import agendaNav from 'src/assets/svg/agendaNav.svg';
import gift from 'src/assets/svg/gift.svg';
import question from 'src/assets/svg/question.svg';
import map from 'src/assets/svg/map.svg';
import response from 'src/assets/svg/response.svg';
import { NavLink } from 'react-router-dom';
// import './style.scss';

const Menu = () => (
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
    <button
    // onClick={handleClickCreateActivity} 
      type="button" alt="profil" className="header__profile">
      <img className="header__icon" alt="disconnect" src={profile} />
      <img className="header__highlight" src={activeMenu} />
    </button>
  </div>
);

export default Menu;
