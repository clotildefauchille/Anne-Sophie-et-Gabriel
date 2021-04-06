import { combineReducers } from 'redux';
import permissions from './permissions';

const globalReducer = combineReducers({
  permissions,
});

export default globalReducer;
