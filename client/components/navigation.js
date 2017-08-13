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
        <nav className="navbar navbar-light">
          <div className="navbar-brand">
            <img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" width="30" height="30" className="d-inline-block align-top" alt="" style={{display: 'inline-block'}}/>
            <p style={{display: 'inline-block'}}>Locus</p>
          </div>
          <div className="navbar-brand" style={{float: 'right', display: 'block'}}>
            <Link to="/signup" className="btn btn-outline-success my-2 my-sm-0" style={{float: 'right'}} type="submit">Sign Up</Link>
          </div>
        </nav>
      </div>
    );
  }
}     