 import React from 'react';
 import { Route, IndexRoute } from 'react-router';
 import App from './components/App';
 import DashboardPage from './components/dashboard/DashboardPage';
 import ManagePatientPage from './components/managePatient/ManagePatientPage';

 export default (
   <Route path="/" component={App}>
     <IndexRoute component={DashboardPage}/>
     <Route path="newReferral" component={ManagePatientPage} />
     <Route path="newReferral/:id" component={ManagePatientPage} />
   </Route>
 );
