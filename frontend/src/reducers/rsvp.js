import { CHANGE_INPUT_VALUE_PRESENCE, CHANGE_INPUT_VALUE_NAME, CHANGE_INPUT_VALUE_ACCOMPANIED } from 'src/actions/rsvp';

const initialState = {
  presence: 'true',
  accompanied: 'true',
  firstname: '',
  lastname: '',
  firstnamePartner: '',
  childrenNumber: '',
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
    default:
      return state;
  }
};

export default rsvp;
