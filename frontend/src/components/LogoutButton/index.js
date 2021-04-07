import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="header__logout">
      <span>Bonjour {user.name}!</span>
      <div className="header__modal">
        <button className='header__modal-button' onClick={() => logout({ returnTo: window.location.origin })}>
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;
