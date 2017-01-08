const mockPatient = { firstName: 'Foo', lastName: 'Bar', hospital: 'Heatherwood', id: generateId() };

function getPatients() {
 return Promise.resolve([mockPatient]);
}

function generateId() { return Math.random().toString(36) }

function savePatient(patient) {
 return new Promise((resolve) => {
    return setTimeout(() => {
      if (!patient.id) {
        const id = generateId();
        resolve(Object.assign({}, patient, { id } ))
      }
      resolve(patient);
    }, 500)
  })
}

export default {
  getPatients,
  savePatient
};