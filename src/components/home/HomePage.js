import React, {PropTypes}  from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';

import PatientList from './PatientList';

class HomePage extends React.Component {
  redirectToNewReferralPage() {
    browserHistory.push('/newReferral');
  }

  render() {
    const { patients } = this.props;

    return (
      <div>
        <input
          type="submit"
          value="New referral"
          className="btn btn-primary"
          onClick={this.redirectToNewReferralPage}
        >
        </input>
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
}

export default connect(mapStateToProps)(HomePage);