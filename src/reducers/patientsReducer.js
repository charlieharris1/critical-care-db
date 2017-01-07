import initialState from './initialState';
import * as Types from '../actions/actionTypes';

export default function PatientsReducer(state = initialState.patients, action) {
  if(action.type === Types.LOAD_PATIENTS_SUCCESS) {
    return [].concat(state, action.patients);
  }
  return state;
};