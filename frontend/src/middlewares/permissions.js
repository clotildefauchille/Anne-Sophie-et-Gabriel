import axios from 'axios';

import {
  FETCH_USER_ID,
  setUserId,
  GET_PERMISSION,
  setThePermissions,
  setUserEmail,
  FETCH_USER_EMAIL,
} from 'src/actions/permissions';

const permissions = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_ID:
      const { token } = action;
      axios
        .get('http://localhost:3000/userId', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(setUserId(response.data.userId));
        });
      break;
    case FETCH_USER_EMAIL:
      const { userId } = store.getState().permissions;
      axios
        .get(`http://localhost:3000/api/v2/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log('response', response);
          store.dispatch(setUserEmail(response.data));
        });
      break;
    case GET_PERMISSION:
      console.log('je veux getpermissions');
      const { email } = store.getState().permissions;
       console.log ("email in getpermissions middleware", email);
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
