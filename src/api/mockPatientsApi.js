const mockPatient = { name: 'Foo Bar', hospital: 'Heatherwood', id: 'X12DFE' };

function getPatients() {
 return Promise.resolve([mockPatient]);
}

export default {
  getPatients
}