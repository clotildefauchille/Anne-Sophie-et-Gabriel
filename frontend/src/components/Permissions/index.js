import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

const Permissions = ({
  children,
  fetchUserId,
  getPermission,
  email,
  userId,
  fetchUserEmail,
}) => {
  // console.log('userId in components prommesse', userId);
  const { getAccessTokenSilently } = useAuth0();
  // console.log(email);
  useEffect(() => {
    async function fetchToken() {
      try {
        const token = await getAccessTokenSilently();
        fetchUserId(token);
      } catch (err) {
        console.error(err);
      }
    }
    fetchToken();
  }, []);
  async function fetchNewToken() {
    const newToken = await getAccessTokenSilently();
    if (email) {
      getPermission(newToken);
    } else if (userId) {
      fetchUserEmail(newToken);
    }
  }
  fetchNewToken();

  // if (email) {
  //   async function fetchToken() {
  //     try {
  //       const token = await getAccessTokenSilently();
  //       getPermission(token);
  //       // console.log('token in email', token);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   fetchToken();
  // } else if (userId) {
  //   async function fetchToken() {
  //     try {
  //       const token = await getAccessTokenSilently();
  //       fetchUserEmail(token);
  //     //  console.log(token);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   fetchToken();
  // }

  //permet d'attendre de recuperer toutes les infos de l'utilisateur et ses
  //permissions avt de aire quoique ce soit ds l'app
  return !email ? <span>loading</span> : <div>{children}</div>;
};

Permissions.propTypes = {
  fetchUserId: PropTypes.func.isRequired,
  getPermission: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  fetchUserEmail: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  // permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Permissions;
