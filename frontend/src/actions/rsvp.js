export const CHANGE_INPUT_VALUE_PRESENCE = 'CHANGE_INPUT_VALUE_PRESENCE';
export const CHANGE_INPUT_VALUE_NAME = 'CHANGE_INPUT_VALUE_NAME';
export const CHANGE_INPUT_VALUE_ACCOMPANIED = 'CHANGE_INPUT_VALUE_ACCOMPANIED';
export const ON_SUBMIT_RSVP = 'ON_SUBMIT_RSVP';
export const FETCH_LAST_ANSWER = 'FETCH_LAST_ANSWER';
export const SAVE_GUEST_ANSWER = 'SAVE_GUEST_ANSWER';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const changeInputValuePresence = (value) => ({
  type: CHANGE_INPUT_VALUE_PRESENCE,
  value,
});

export const changeInputValueName = (value, name) => ({
  type: CHANGE_INPUT_VALUE_NAME,
  value,
  name,
});
export const changeInputValueAccompanied = (value) => ({
  type: CHANGE_INPUT_VALUE_ACCOMPANIED,
  value,
});
export const onSubmitRsvp = () => ({
  type: ON_SUBMIT_RSVP,
});

export const fetchLastAnswer = () => ({
  type: FETCH_LAST_ANSWER,
});

export const saveGuestAnswers = (data) => ({
  type: SAVE_GUEST_ANSWER,
  data,
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});
