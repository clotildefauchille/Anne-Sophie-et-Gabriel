import axios from 'axios';

import { FETCH_PERMISSIONS, setPermissions } from 'src/actions/permissions';

const permissions = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PERMISSIONS:
      const { token } = action;
      // console.log('token', token);
      axios
        .get('http://localhost:3000/permissions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(setPermissions(response.data.permissions, response.data.userId));
        });

      // store.dispatch(getPermissions(getPermissions.data.permissions));
      break;

    default:
      next(action);
  }
};

export default permissions;
