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
      let { token } = action;
      axios
        .get(`${process.env.API_URL}/userId`, {
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
      let { token: userEmailToken }= action
      // console.log('token useremail', userEmailToken);
      axios
        .get(`${process.env.API_URL}/api/v2/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${userEmailToken}`,
          },
        })
        .then((response) => {
          // console.log('response', response);
          store.dispatch(setUserEmail(response.data));
        });
      break;
    case GET_PERMISSION:
      const { email } = store.getState().permissions;
      let { token: permissionToken } = action;
      // console.log("token in getpermission", permissionToken);
      axios
        .get(`${process.env.API_URL}/api/permission/${email}`, {
          headers: {
            Authorization: `Bearer ${permissionToken}`,
          },
        })
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
