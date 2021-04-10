import React, { useEffect } from 'react';
// import './style.scss';
import { useAuth0 } from '@auth0/auth0-react';
import Permissions from 'src/containers/permissions';
// const SaveUserAndPermissions = ({ user, children }) => {
//   console.log("user", user);
//   useEffect(() => {
//     // TODO: dispatch user to redux reducer
//     // TODO: dispatch user-permissions
//   }, [user]);
//   return <>{children}</>
// }

const Connexion = ({ children }) => {
  const { user, isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
  useEffect(() => {
    const redirect = async () => {
      if (!user && !isLoading) {
        await loginWithRedirect();
      }
    };
    redirect();
  }, [isLoading]);

  return isLoading || !user ? (
    <span>loading</span>
  ) : (
    <Permissions user={user}>{children}</Permissions>
  );
};

export default Connexion;
