import { CLOSE_MODAL, SHOW_LOGIN_MODAL } from 'src/actions/logoutModal';

const initialState = {
  displayed: false,
};

const logoutModal = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_LOGIN_MODAL:
      return { ...state, displayed: true };
    case CLOSE_MODAL:
      return { ...state, displayed: false };
    default:
      return state;
  }
};

export default logoutModal;
