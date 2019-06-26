import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import SignUpPresentationComponent from '../components/SignupComponent';
import PropTypes from 'prop-types';
import {signupUrl} from '../utils';
import {postSignup} from '../redux/actions/SignupActions';


export class SignUp extends Component {
  constructor(props){
    super(props);
    const state = {
      first_name:"",
      last_name:"",
      othernames:"",
      username:"",
      phone_number:"",
      email:"",
      password:""
    };
  }
  checkBlank = () => {
    const { first_name, last_name, othernames, username, phone_number,email, password } = this.state;
    if (first_name === '' || last_name === '' || othernames === ''||username === '' || phone_number === '' || email === ''|| password ==='') {
      toast.dismiss();
      toast.error("All fields must be filled", {
        hideProgressBar: false,
        autoClose: 3000
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { first_name, last_name, othernames, username, phone_number,email, password } = this.state;
    const signupDetails = { first_name, last_name, othernames, username, phone_number,email, password };
    this.checkBlank();
    this.props.postSignup(signupUrl, signupDetails, this.props);
  };

  render () {
    return (
      <div>
      <SignUpPresentationComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}/>
      </div>
      
    );
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  username: PropTypes.string,
  othernames: PropTypes.string,
  phone_number:PropTypes.string,
  email:PropTypes.string,
  password:PropTypes.string,
  postSignup: PropTypes.func
};

export default connect(null, {postSignup})(SignUp);
