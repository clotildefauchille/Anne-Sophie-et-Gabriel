import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import profile from 'src/assets/svg/profile.svg';

const LogoutButton = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="dropdown">
      <img className="dropdown__icon" alt="disconnect" src={profile} />
      <span className="hello">Bonjour {user.name}!</span>
      <div className="dropdown__content">
        <button className="dropdown__deconnect-btn" onClick={() => logout({ returnTo: window.location.origin })}>
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;
