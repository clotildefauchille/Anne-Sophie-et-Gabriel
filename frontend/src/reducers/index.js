import { combineReducers } from 'redux';
import permissions from './permissions';
import rsvp from './rsvp';
import infos from './infos';

const globalReducer = combineReducers({
  permissions, rsvp, infos,
});

export default globalReducer;
