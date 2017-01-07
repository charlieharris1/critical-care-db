import React, { PropTypes } from 'react';

const PatientRow = ({id, firstName, lastName,  hospital}) => (
  <tr key={id} >
    <td>{lastName}</td>
    <td>{firstName}</td>
    <td>{hospital}</td>
    <td>{id}</td>
  </tr>
);

PatientRow.propTypes = {
  id: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  hospital: PropTypes.string.isRequired
};

export default PatientRow;