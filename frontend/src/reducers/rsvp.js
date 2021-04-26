import {
  CHANGE_INPUT_VALUE_PRESENCE,
  CHANGE_INPUT_VALUE_NAME,
  CHANGE_INPUT_VALUE_ACCOMPANIED,
  SAVE_GUEST_ANSWER,
  SEND_MESSAGE,
} from 'src/actions/rsvp';

const initialState = {
  presence: 'true',
  accompanied: 'true',
  firstname: '',
  lastname: '',
  firstnamePartner: '',
  childrenNumber: '',
  message: '',
};

const rsvp = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_PRESENCE:
      // console.log('action.value', action.value)
      return {
        ...state,
        presence: action.value,
      };
    case CHANGE_INPUT_VALUE_ACCOMPANIED:
      // console.log('action.value', action.value)
      return {
        ...state,
        accompanied: action.value,
      };
    case CHANGE_INPUT_VALUE_NAME:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_GUEST_ANSWER:
      return {
        ...state,
        presence: action.data.present,
        accompanied: action.data.accompanied,
        firstname: action.data.firstname,
        lastname: action.data.lastname,
        firstnamePartner: action.data.firstname_partner,
        childrenNumber: action.data.children_number,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default rsvp;
