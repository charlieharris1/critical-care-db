import PatientsApi from '../api/mockPatientsApi';
import * as Types from './actionTypes';

export function loadPatientsSuccess(patients) {
  return { type: Types.LOAD_PATIENTS_SUCCESS, patients };
}
export function createPatientSuccess(patient) {
  return { type: Types.CREATE_PATIENT_SUCCESS, patient };
}
export function updatePatientSuccess(patient) {
  return { type: Types.UPDATE_PATIENT_SUCCESS, patient };
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
      .then(savedPatient =>
        patient.id
          ? dispatch(updatePatientSuccess(savedPatient))
          : dispatch(createPatientSuccess(savedPatient)))
      .catch(err => console.error('There was a problem saving a patient'));
}


