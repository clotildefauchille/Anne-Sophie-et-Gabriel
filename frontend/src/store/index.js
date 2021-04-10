import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import rsvp from 'src/middlewares/rsvp';
import permissions from 'src/middlewares/permissions';
import infos from 'src/middlewares/infos';
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(permissions, rsvp, infos),
));

export default store;
