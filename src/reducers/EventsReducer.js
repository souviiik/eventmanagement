import { GET_EVENTS, GET_EVENT, CREATE_EVENT, DELETE_EVENT } from '../actions/Types';
import _ from 'lodash';

export default function(state = {}, action) {
 console.log("state ", state);
 console.log("action.payload ", action.payload);
  switch(action.type) {
    case GET_EVENTS:
      return action.payload
    case GET_EVENT:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_EVENT:
      return {...state, action.payload}
    case DELETE_EVENT:
      return _.omit(state, action.payload);
    default: 
      return state;
  }
}