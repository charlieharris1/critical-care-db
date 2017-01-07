import React  from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React and Redux Tutorial</h1>
        <p>This is the output of a Pluralsight course</p>
        <Link to="about" className="btn btn-primary btn-lg">Find out more</Link>
      </div>
    );
  }
}

export default HomePage;