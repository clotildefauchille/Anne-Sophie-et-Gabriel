import { combineReducers } from 'redux';
import permissions from './permissions';
import rsvp from './rsvp';
import infos from './infos';
import events from './events';
import confirmationModal from './confirmationModal';

const globalReducer = combineReducers({
  permissions, rsvp, infos, events, confirmationModal,
});

export default globalReducer;
