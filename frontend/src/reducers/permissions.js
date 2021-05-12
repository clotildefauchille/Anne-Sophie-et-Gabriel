import { SET_PERMISSIONS, SAVE_USER_INFOS, SET_THE_PERMISSIONS } from 'src/actions/permissions';

const initialState = {
  type: '',
  userId: '',
  lastname: '',
  firstname: '',
  email: '',
};

const permissions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PERMISSIONS:
      return {
        ...state,
        userId: action.userId,
      };
    case SET_THE_PERMISSIONS:
      return {
        ...state,
        type: action.permission,
      };
    case SAVE_USER_INFOS:
      return {
        ...state,
        lastname: action.data.lastname,
        firstname: action.data.firstname,
        email: action.data.email,
      };
    default:
      return state;
  }
};

export default permissions;
