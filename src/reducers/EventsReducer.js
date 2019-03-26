import { GET_EVENTS } from '../actions/events.action';

export default function(state = [], action) {
  switch(action.type) {
    case GET_EVENTS:
      return action.payload
    default: 
      return state;
  }
}