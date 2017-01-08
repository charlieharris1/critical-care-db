import React, {PropTypes} from 'react';
import {IndexLink} from 'react-router';

const Header = () =>
  (
    <nav className="navbar navbar-default navbar-fixed-top" >
      <div className="container-fluid" >
        <IndexLink to="/" class="active">Dashboard</IndexLink>
      </div>
    </nav>
  );

Header.PropTypes = {};

export default Header;