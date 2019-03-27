import axios from 'axios';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';

import {
  GET_EVENTS, GET_EVENT, SIGN_IN, SIGN_OUT, CREATE_EVENT, DELETE_EVENT
} from './Types';

let events = [];
const BASE_URL = 'http://10.227.111.129:5000/api';

export function getEvents() {  
  return function(dispatch) {
    axios.get(`${BASE_URL}/events/1`)
    .then(response => {
      dispatch({
        type: GET_EVENTS,
        payload: response.data.data.events
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
        payload: response.data.data
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
  data.id = events.length + 1;
  // TODO: Request to create event

  let axiosConfig = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
  };


  return function(dispatch) {
    axios.post(`${BASE_URL}/events/add`, data, axiosConfig)
    .then(response => {
      console.log("response ", response);
      dispatch({
        type: CREATE_EVENT,
        payload: response
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export function updateEvent(data) {
  // TODO: Request to update event
}

export function deleteEvent(id, key) {
  // TODO: Request to update event 
  return function(dispatch) {
    axios.delete(`${BASE_URL}/event/${id}`)
    .then(response => {
//  console.log("response ", response);
      alert(response.data.message);
      dispatch({
        type: DELETE_EVENT,
        payload: key
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export const signIn = (payload) => {
  return {
    type: SIGN_IN,
    payload
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}
