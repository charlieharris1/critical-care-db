import initialState from './initialState';
import * as Types from '../actions/actionTypes';

export default function PatientsReducer(state = initialState.patients, action) {
  if(action.type === Types.LOAD_PATIENTS_SUCCESS) {
    return [].concat(state, action.patients);
  }
  if(action.type === Types.CREATE_PATIENT_SUCCESS) {
    return [].concat(state, action.patient);
  }
  return state;
}