import { combineReducers } from 'redux';
import SignUpReducer from './reducers/SignUpReducer';
import LoginReducer from './reducers/LoginReducer';

export default combineReducers ({
  SignUpReducer: SignUpReducer,
  LoginReducer: LoginReducer

});