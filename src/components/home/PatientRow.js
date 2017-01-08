import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PatientRow = ({id, firstName, lastName,  hospital}) => (
  <tr key={id} >
    <td>{lastName}</td>
    <td>{firstName}</td>
    <td>{hospital}</td>
    <td>{id}</td>
    <td><Link to={'/newReferral/' +  id}>Edit</Link></td>
  </tr>
);

PatientRow.propTypes = {
  id: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  hospital: PropTypes.string.isRequired
};

export default PatientRow;