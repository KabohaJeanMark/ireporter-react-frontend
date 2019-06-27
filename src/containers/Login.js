import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import LoginPresentationComponent from '../components/LoginComponent';
import PropTypes from 'prop-types';
import {loginUrl} from '../utils';
import {postLogin} from '../redux/actions/LoginActions';


export class Login extends Component {
  constructor(props){
    super(props);
    const state = {
      username:"",
      password:""
    };
  }

  handleChange=(event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { username,  password } = this.state;
    const loginDetails = { username,  password };
    this.props.postLogin(loginUrl, loginDetails, this.props);
  };

  render () {
    return (
      <div>
      <LoginPresentationComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}/>
      </div>
      
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  username: PropTypes.string,
  password:PropTypes.string
};

export default connect(null, {postLogin})(Login);
