import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="dropdown">
      <span className="hello">Bonjour {user.name}!</span>
      <div className="dropdown-content">
        <button className="deconnect-btn" onClick={() => logout({ returnTo: window.location.origin })}>
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;
