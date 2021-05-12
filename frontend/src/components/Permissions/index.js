import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

const Permissions = ({ children, fetchPermission }) => {
  const [loading, setLoading] = useState(true);

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    fetchPermission();
    setLoading(false);
    // async function fetchToken() {
    //   try {
    //     const token = await getAccessTokenSilently();
    //     fetchPermission(token);
    //     console.log(token);
    //   } catch (err) {
    //     console.error(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchToken();
  }, []);
  //permet d'attendre de recuperer toutes les infos de l'utilisateur et ses permissions avt de aire quoique ce soit ds l'app
  return loading ? <span>loading</span> : <div>{children}</div>;
};

Permissions.propTypes = {
  fetchPermission: PropTypes.func.isRequired,
  // permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Permissions;
