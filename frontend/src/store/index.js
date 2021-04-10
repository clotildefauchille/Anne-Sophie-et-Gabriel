import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import rsvp from 'src/middlewares/rsvp';
import permissions from 'src/middlewares/permissions';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(permissions, rsvp),
));

export default store;
