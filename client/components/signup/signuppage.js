import React, { Component } from 'react';
import Navi from '../navigation';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link}  from 'react-router-dom'
import SignUpForm from './signupform';
import { connect } from "react-redux";
import { userSignUpRequest } from '../../actions/signUpActions';


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
            <Link to="/" className="btn btn-outline-success my-2 my-sm-0" style={{float: 'right'}} type="submit">Back</Link>
        </div>
      )
  }
}

  render() {
    const { userSignUpRequest } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div>
             {this.urlPath()}
          </div>
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
