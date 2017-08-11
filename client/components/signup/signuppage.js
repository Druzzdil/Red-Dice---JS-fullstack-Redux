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
  }
  render() {
    const { userSignUpRequest } = this.props;
    console.log(userSignUpRequest, 'igor');
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <Navi />
            <button className="btn btn-primary"><Link to="/">Back</Link></button>
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
