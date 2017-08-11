import React, { Component } from 'react';
import Navi from '../navigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link}  from 'react-router-dom'
import SignUpForm from './signupform';


export default class SignUpPage extends Component {
  constructor(props){
    super(props);
  }
  render() {
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
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}