import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';

const Header = () =>
  (
    <nav>
      <IndexLink to="/" class="active">Dashboard</IndexLink>
    </nav>
  );

Header.prototype = {};

export default Header;