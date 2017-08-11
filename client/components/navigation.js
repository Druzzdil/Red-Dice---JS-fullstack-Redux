import React from 'react';

import {Link}  from 'react-router-dom'
import SignUpPage from './signup/signuppage';

export default class Navi extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header pull-right">
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}