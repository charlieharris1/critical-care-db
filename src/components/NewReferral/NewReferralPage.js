import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './../common/Form';
import * as PatientActions from '../../actions/patientActions';

class NewReferralPage extends Component {
  constructor(props, context) {
   super(props, context); // Calls the parent class (React.Component) constructor

    this.state = {
     patient: Object.assign({}, this.props.patient)
    };

    this.updatePatientState = this.updatePatientState.bind(this);
    this.savePatient = this.savePatient.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.patient.id !== nextProps.patient.id) {
      this.setState({ patient: Object.assign({}, nextProps.patient) });
    }
  }

  updatePatientState(e) {
    const field = e.target.name;
    let patient = this.state.patient;
    patient[field] = e.target.value;

    return this.setState({ patient });
  }

  savePatient(e) {
    e.preventDefault();

    this.props.actions.savePatient(this.state.patient)
      .then(() => this.redirect())
      .catch(err => console.error(err));
  }

  redirect() {
    this.context.router.push('/');
  }

  render() {
   return (
     <div>
      <h1>Add new referral</h1>
      <Form
        patient={this.state.patient}
        onChange={this.updatePatientState}
        onSave={this.savePatient}
      />
     </div>
   );
  }
}

NewReferralPage.propTypes = {
  patient: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

NewReferralPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getPatient(patientId, patients) {
 return patients.find(patient => patient.id === patientId);
}

function mapStateToProps(state, ownProps) {
  const patientId = ownProps.params.id;
  let newPatient = { id: '', firstName: '', lastName: '', hospital: ''};

  return patientId ? { patient: getPatient(patientId, state.patients) } : { patient: newPatient };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PatientActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReferralPage);