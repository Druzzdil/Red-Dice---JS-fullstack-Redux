import React, { Component } from 'react';
import Navi from './navigation';
import SignUpPage from './signup/signuppage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Main extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="well">
            <h1>this is main app content</h1>
          </div>
        </div>
      </div>
    );
  }
}
