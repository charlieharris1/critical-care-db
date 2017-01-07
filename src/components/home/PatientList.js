import React, { PropTypes } from 'react';

const patientRow = ({ name, hospital, id }) => (
  <tr key={id} >
    <td>{name}</td>
    <td>{hospital}</td>
    <td>{id}</td>
  </tr>
);

const patientRows = (arrayOfPatients) => arrayOfPatients.map(patientRow);

const PatientList = ({ patients }) =>
  (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Patient name</th>
            <th>Hospital</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
        { patients.length > 0 ? patientRows(patients) : false }
        </tbody>
      </table>
    </div>
  );

PatientList.propTypes = {
  patients: React.PropTypes.array.isRequired
};

export default PatientList;


