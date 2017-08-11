import React, { Component } from 'react';
import Navi from './navigation';
import SignUpPage from './signup/signuppage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './main';

export default class Home extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <div className="container">
        </div>
        <MuiThemeProvider>
          <Navi />
        </MuiThemeProvider>
        <Main />
      </div>
    );
  }
}
