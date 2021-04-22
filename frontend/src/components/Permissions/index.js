import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

const Permissions = ({ children, fetchPermission }) => {
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    async function fetchToken() {
      try {
        const token = await getAccessTokenSilently();
        fetchPermission(token);
        console.log(token);
      }
      catch (err) {
        console.error(err);
      }
    }
    fetchToken();
  }, []);

  return <div>{children}</div>;
};

Permissions.propTypes = {
  fetchPermission: PropTypes.func.isRequired,
  // permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Permissions;
