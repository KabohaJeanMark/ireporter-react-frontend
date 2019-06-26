import { loginType } from '../actions/types';

const initialState = {
  loggedInUser: "",
  errors: ""
};

const { LOGIN_SUCCESS, LOGIN_ERROR } = loginType;

export default function (state = initialState, action) {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      loggedInUser: action.payload
    };
  case LOGIN_ERROR:
    return {
      ...state,
      errors: "Your username or password is incorrect"
    };

  default:
    return state;
  }
}
