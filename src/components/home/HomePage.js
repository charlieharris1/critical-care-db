import React  from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>TimeBox</h1>
        <p>Improve your productivity</p>
        <Link to="about" className="btn btn-primary btn-lg">Find out more</Link>
      </div>
    );
  }
}

export default HomePage;