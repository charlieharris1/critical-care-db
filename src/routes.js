 import React from 'react';
 import { Route, IndexRoute } from 'react-router';
 import App from './components/App';
 import HomePage from './components/home/HomePage';
 import NewReferralPage from './components/newReferral/NewReferralPage';

 export default (
   <Route path="/" component={App}>
     <IndexRoute component={HomePage}/>
     <Route path="newReferral" component={NewReferralPage} />
     <Route path="newReferral/:id" component={NewReferralPage} />
   </Route>
 );
