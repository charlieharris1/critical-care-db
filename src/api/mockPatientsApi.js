const mockPatient = { firstName: 'Foo', lastName: 'Bar', hospital: 'Heatherwood', id: 'X12DFE' };

function getPatients() {
 return Promise.resolve([mockPatient]);
}

function savePatient() {
 return Promise.resolve();
}

export default {
  getPatients,
  savePatient
};