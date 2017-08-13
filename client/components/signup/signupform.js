import React, { Component } from 'react';
import timezones from '../../data/timezones';
import _ from 'lodash';


export default class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
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
      const { userSignUpRequest } = this.props;
      e.preventDefault();
      this.props.userSignUpRequest(this.props);
      console.log(this.props, userSignUpRequest, ' igororororororor')
  }

  render() {
    //a nice method here, mapping through another file object
    const timeZonesList = _.map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );

    return (
      <div>
        <h1 className="text-center">Join Our community</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="control-label">Username</label>
            <input
                type="text"
                value={this.state.username}
                onChange={this.onChange}
                name="username"
                className="form-control"/>
          </div>

          <div className="form-group" style={this.styles}>
            <label className="control-label">Password</label>
            <input
                type="text"
                value={this.state.password}
                onChange={this.onChange}
                name="password"
                className="form-control"/>
          </div>

          <div className="form-group">
            <label className="control-label">Password confirmation</label>
            <input
                type="text"
                value={this.state.passwordConfirmation}
                onChange={this.onChange}
                name="passwordConfirmation"
                className="form-control"/>
          </div>

          <div className="form-group">
            <label className="control-label">Timezone</label>
            <select
                type="text"
                value={this.state.timezone}
                onChange={this.onChange}
                name="timezone"
                className="form-control">
                <option value="" disabled>Choose your timezone</option>
                {timeZonesList}
                </select>
          </div>
          <div className="checkbox">
            <label></label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes  = {
  userSignUpRequest: React.PropTypes.func.isRequired
}
