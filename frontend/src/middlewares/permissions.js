import axios from 'axios';

import {
  FETCH_USER_ID,
  setUserId,
  GET_PERMISSION,
  setThePermissions,
  setUserEmail,
} from 'src/actions/permissions';

const permissions = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_ID:
      // console.log('middleware fetchuserId');
      const { token } = action;
      // console.log('token', token);
      axios
        .get('http://localhost:3000/userId', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log(
          //   'response.data.userId middlware fetchuserId',
          //   response.data.userId,
          // );
          store.dispatch(setUserId(response.data.userId));
          let userId = response.data.userId;
          const getEmail = axios.get(
            `http://localhost:3000/api/v2/users/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          return getEmail;
        })
        .then((response) => {
          // console.log('response', response);
          store.dispatch(setUserEmail(response.data));
        });
      break;
    case GET_PERMISSION:
      const { email } = store.getState().permissions;
// console.log ("email in getpermissions middleware", email);
      axios
        .get(`http://localhost:3000/api/permission/${email}`)
        .then((response) => {
          //  console.log('middleware getPermissions response.data', response);
          store.dispatch(setThePermissions(response.data));
        });
      break;
    default:
      next(action);
  }
};

export default permissions;
