import React, { useEffect } from 'react';
import './style.scss';
import agendaNav from 'src/assets/svg/agendaNav.svg';
import gift from 'src/assets/svg/gift.svg';
import bed from 'src/assets/svg/bed.svg';
import confirmation from 'src/assets/svg/confirmation.svg';
import { NavLink } from 'react-router-dom';
import ActiveMenu from 'src/components/ActiveMenu';
import activeMenu from 'src/assets/svg/activeMenu.svg';
import LogoutButton from 'src/components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently();
      // call localhost:3000/permissions api with token
      const getPermissions = await fetch("http://localhost:3000/permissions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await getPermissions.json();
      console.log("res getPermission", res)
      
    };
    getToken();


    
  }, []);
  // console.log('user', user);
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
            <img className="header__icon" src={bed} alt="info pratique" />
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
