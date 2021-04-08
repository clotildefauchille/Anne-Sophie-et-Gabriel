import { combineReducers } from 'redux';
import permissions from './permissions';
import rsvp from './rsvp';

const globalReducer = combineReducers({
  permissions, rsvp,
});

export default globalReducer;
