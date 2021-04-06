import { SET_PERMISSIONS } from 'src/actions/permissions';

const initialState = {
  type: [''],
};

const permissions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PERMISSIONS:
      // console.log(action.permissions);
      return {
        ...state,
        type: action.permissions,
      };
    default:
      return state;
  }
};

export default permissions;
