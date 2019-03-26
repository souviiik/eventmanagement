import axios from 'axios';
export const GET_EVENTS = 'get_events';
export const GET_EVENT = 'get_event';
export const SIGN_IN = 'sign_in';
export const SIGN_OUT = 'sign_out';

let events = [];
const BASE_URL = '';

export function getEvents() {  
  return function(dispatch) {
    axios.get('http://www.json-generator.com/api/json/get/cfDagBPQXS')
    .then(response => {
      dispatch({
        type: GET_EVENTS,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export function getEvent(id) {  
  return function(dispatch) {
    axios.get(`${BASE_URL}/event/${id}`)
    .then(response => {
      dispatch({
        type: GET_EVENT,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

// export function getEvents() {
//   const request = axios.get('http://www.json-generator.com/api/json/get/cjTSQTlvqW');

//     return {
//         type: GET_EVENTS,
//         payload: request
//     };
// }

export function createEvent(data) {
  data.id = events.length+1;
  // TODO: Request to create event
}

export function updateEvent(data) {
  // TODO: Request to update event
}

export const signIn = () => {
  return {
    type: SIGN_IN,
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}
