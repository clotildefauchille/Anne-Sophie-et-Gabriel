import { combineReducers } from 'redux';
import permissions from './permissions';
import rsvp from './rsvp';
import infos from './infos';
import events from './events';
import logoutModal from './logoutModal';

const globalReducer = combineReducers({
  permissions, rsvp, infos, events, logoutModal,
});

export default globalReducer;
