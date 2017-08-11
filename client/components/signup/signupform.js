import React, { Component } from 'react';

export default class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      timezone: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  onSubmit(e){
      e.preventDefault();
      console.log(this.state)
  }


  render() {
    return (
      <div>
        <h1 className="text-center">Join Our community</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group centered">
            <label className="control-label">Username</label>
            <input
                type="text"
                value={this.state.username}
                onChange={this.onChange}
                name="username"
                className="form-control"/>
          </div>

          <div className="form-group centered">
            <label className="control-label">Password</label>
            <input
                type="text"
                value={this.state.password}
                onChange={this.onChange}
                name="password"
                className="form-control"/>
          </div>

          <div className="form-group centered">
            <label className="control-label">Password confirmation</label>
            <input
                type="text"
                value={this.state.passwordConfirmation}
                onChange={this.onChange}
                name="passwordConfirmation"
                className="form-control"/>
          </div>

          <div className="form-group centered">
            <label className="control-label">Timezone</label>
            <input
                type="text"
                value={this.state.timezone}
                onChange={this.onChange}
                name="timezone"
                className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}