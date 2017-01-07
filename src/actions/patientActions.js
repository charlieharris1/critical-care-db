import PatientsApi from '../api/mockPatientsApi';
import * as Types from './actionTypes';

export function loadPatientsSuccess(patients) {
  return { type: Types.LOAD_PATIENTS_SUCCESS, patients };
}

export function loadPatients() {
  return (dispatch) =>
    PatientsApi.getPatients()
      .then(patients => dispatch(loadPatientsSuccess(patients)));
}



