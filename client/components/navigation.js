import React from 'react';

import {Link}  from 'react-router-dom'
import SignUpPage from './signup/signuppage';


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
            <Link to="/signup" style={buttonMain} type="submit">Sign Up</Link>
          </div>
        </nav>
      </div>
    );
  }
}     