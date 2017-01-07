import React, { PropTypes } from 'react';
import PatientRow from './PatientRow';

const PatientList = ({patients}) =>
  (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Last name</th>
            <th>First name</th>
            <th>Hospital</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
        {patients.length > 0 ? patients.map(PatientRow) : false}
        </tbody>
      </table>
    </div>
  );

PatientList.propTypes = {
  patients: React.PropTypes.array.isRequired
};

export default PatientList;


