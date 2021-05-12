import axios from 'axios';

import {
  FETCH_USER_ID,
  setPermissions,
  GET_PERMISSIONS,
  setThePermissions,
} from 'src/actions/permissions';

const permissions = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_ID:
      const { token } = action;
      // console.log('token', token);
      axios
        .get('http://localhost:3000/permissions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('response.data.userId', response.data.userId);
          store.dispatch(setPermissions(response.data.userId));
        });

      // store.dispatch(getPermissions(getPermissions.data.permissions));
      break;
    case GET_PERMISSIONS:
      const userId = store.getState().permissions
      axios
        .get(`http://localhost:3000/api/guestAnswer/${userId}`)
        .then((response) => {
          console.log('middleware getPermissions', response.data);
          store.dispatch(setThePermissions(response.data));
        });
    default:
      next(action);
  }
};

export default permissions;
