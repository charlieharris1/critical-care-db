import PatientsApi from '../api/mockPatientsApi';
import * as Types from './actionTypes';

export function loadPatientsSuccess(patients) {
  return { type: Types.LOAD_PATIENTS_SUCCESS, patients };
}
export function createPatientSuccess(patient) {
  return { type: Types.CREATE_PATIENT_SUCCESS, patient };
}

export function loadPatients() {
  return (dispatch) =>
    PatientsApi.getPatients()
      .then(patients => dispatch(loadPatientsSuccess(patients)))
      .catch(err => console.error('There was a problem loading patients'));
}

export function savePatient(patient) {
  return (dispatch) =>
    PatientsApi.savePatient(patient)
      .then(() => dispatch(createPatientSuccess(patient)))
      .catch(err => console.error('There was a problem saving a patient'));
}


