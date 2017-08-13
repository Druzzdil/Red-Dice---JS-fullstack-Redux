import React, { Component } from 'react';
import Navi from '../navigation';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link}  from 'react-router-dom'
import SignUpForm from './signupform';
import { connect } from "react-redux";
import { userSignUpRequest } from '../../actions/signUpActions';


const buttonMain = {
  float: 'right',
  textTransform: 'uppercase',
  fontSize: '.9em',
  letterSpacing: '.1em',
  backgroundColor: '79589F',
  transition: 'background 0.1s linear',
  borderRadius: '3px',
  display: 'inline-block',
  margin:'5px 0',
  padding: '6px 14px',
  border: 'none',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '13px',
  position: 'relative',
  cursor: 'pointer'
}

 class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      path: ''
    }
  }


urlPath() {
  let path = this.props.location.pathname;
  if(path === '/'){
    return <Link to ="/signup">Sign Up</Link>
  } else {
  return (
    <div className="navbar-brand" style={{float: 'right', display: 'block'}}>
          <Link to="/"  style={buttonMain} type="submit">Back</Link>
      </div>
    )
  }
}

  render() {
    const { userSignUpRequest } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <nav className="navbar navbar-light">
            <div className="navbar-brand">
              <img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" width="30" height="30" className="d-inline-block align-top" alt="" style={{display: 'inline-block'}}/>
              <p style={{display: 'inline-block'}}>Locus</p>
            </div>
            <div>
              {this.urlPath()}
            </div>
          </nav>
        </MuiThemeProvider>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4">
            <div className="input-group">
              <SignUpForm userSignUpRequest={userSignUpRequest}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


SignUpPage.propTypes  = {
  userSignUpRequest: React.PropTypes.func.isRequired
}

export default(connect(null, {userSignUpRequest})(SignUpPage));
