import { CLOSE_MODAL, SHOW_ANSWER_MODAL } from 'src/actions/confirmationModal';

const initialState = {
  displayed: false,
};

const confirmationModal = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_ANSWER_MODAL:
      return { ...state, displayed: true };
    case CLOSE_MODAL:
      return { ...state, displayed: false };
    default:
      return state;
  }
};

export default confirmationModal;
