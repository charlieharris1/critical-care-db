import React, {PropTypes}  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import PatientList from './PatientList';

class HomePage extends React.Component {
  render() {
    const { patients } = this.props;

    return (
      <div>
        <PatientList patients={patients} />
      </div>
    );
  }
}

HomePage.propTypes = {
  patients: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { patients: state.patients };
};

export default connect(mapStateToProps)(HomePage);