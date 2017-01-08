import React, {PropTypes} from 'react';

const TextInput = ({name, value, label, onChange}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      name={name}
      value={value || ""}
      onChange={onChange}
    />
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
