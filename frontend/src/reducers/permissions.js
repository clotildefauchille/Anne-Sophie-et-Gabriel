import {
  SET_USER_ID,
  SAVE_USER_INFOS,
  SET_THE_PERMISSIONS,
  SET_USER_EMAIL,
} from 'src/actions/permissions';

const initialState = {
  type: '',
  userId: '',
  lastname: '',
  firstname: '',
  email: '',
  metadata: {},
  last_login: '',
};

const permissions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_ID:
      // console.log('action.userId in reducer', action.userId);
      return {
        ...state,
        userId: action.userId,
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.userInfos.email,
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
        metadata: action.data.metadata,
        last_login: action.data.last_login,
      };
    default:
      return state;
  }
};

export default permissions;
