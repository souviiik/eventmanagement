import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  events: EventsReducer,
  form: formReducer,
});