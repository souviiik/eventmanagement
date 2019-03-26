import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import authReducer from './authReducer';

export default combineReducers({
  events: EventsReducer,
  auth: authReducer,
});