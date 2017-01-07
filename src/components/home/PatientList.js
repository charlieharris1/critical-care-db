import React, { PropTypes } from 'react';

const patientRow = ({ name, hospital }) => (
  <tr>
    <td>{name}</td>
    <td>{hospital}</td>
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


