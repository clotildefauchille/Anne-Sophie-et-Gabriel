import { SAVE_EVENTS_INFOS } from 'src/actions/events';

const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS_INFOS:
    // console.log('action.events.schedule reducer', action.events);
      return [...action.events];
    default:
      return state;
  }
};

export default reducer;
