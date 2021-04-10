export const CHANGE_INPUT_VALUE_PRESENCE = 'CHANGE_INPUT_VALUE_PRESENCE';
export const CHANGE_INPUT_VALUE_NAME = 'CHANGE_INPUT_VALUE_NAME';
export const CHANGE_INPUT_VALUE_ACCOMPANIED = 'CHANGE_INPUT_VALUE_ACCOMPANIED';
export const ON_SUBMIT_RSVP = 'ON_SUBMIT_RSVP';
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
