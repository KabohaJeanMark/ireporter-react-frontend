import { signupType } from '../actions/types';

const initialState = {
  createdUser: "",
  errors: ""
};

const { SIGNUP_SUCCESS, SIGNUP_ERROR } = signupType;

export default function (state = initialState, action) {
  switch (action.type) {
  case SIGNUP_SUCCESS:
    return {
      ...state,
      createdUser: action.payload
    };
  case SIGNUP_ERROR:
    return {
      ...state,
      errors: "Your session token has expired"
    };

  default:
    return state;
  }
}
