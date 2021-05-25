import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  // const [userMetadata, setUserMetadata] = useState(null);
  const [userRoles, setUserRoles] = useState(null);


  useEffect(() => {
    const getUserRoles = async () => {
      try {
        const token = await getAccessTokenSilently();
        const userRolesByIdUrl = `http://localhost:3000/v1/roles`;

        const rolesResponse = await fetch(userRolesByIdUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await rolesResponse.json();
        console.log('user_roles', res);
        setUserRoles(re);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserRoles();
  }, []);
  
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <h2>{userRoles[0].name}</h2> */}
      </div>
    )
  );
};

export default Profile;
