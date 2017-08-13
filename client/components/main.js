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
      <div className="jumbotron">
        <h1>Navbar example</h1>
        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
      </div>
      </div>
    );
  }
}
