import { SET_PERMISSIONS } from 'src/actions/permissions';

const initialState = {
  type: [''],
  userId: '',
};

const permissions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PERMISSIONS:
      return {
        ...state,
        type: action.permissions,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default permissions;
