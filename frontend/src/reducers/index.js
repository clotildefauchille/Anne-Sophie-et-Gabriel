import { combineReducers } from 'redux';
import permissions from './permissions';
import rsvp from './rsvp';
import infos from './infos';
import events from './events';

const globalReducer = combineReducers({
  permissions, rsvp, infos, events,
});

export default globalReducer;
