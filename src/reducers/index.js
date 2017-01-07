import { combineReducers } from 'redux';
import patients from './patientsReducer';

const rootReducer = combineReducers({
  patients
});

export default rootReducer;