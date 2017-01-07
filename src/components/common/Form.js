import React, {PropTypes} from 'react';
import TextInput from './TextInput';

const Form = ({ patient, onChange, onSave }) =>
  (
    <form>
      <TextInput
        name="id"
        label="ID"
        value={patient.id}
        onChange={onChange}
      />
      <TextInput
        name="firstName"
        label="First name"
        value={patient.firstName}
        onChange={onChange}
      />
      <TextInput
        name="lastName"
        label="Last name"
        value={patient.lastName}
        onChange={onChange}
      />
      <TextInput
        name="hospital"
        label="Hospital"
        value={patient.hospital}
        onChange={onChange}
      />
      <input
        type="submit"
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );

Form.propTypes = {
  patient: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default Form;