import reducer from '../redux/reducers/SignUpReducer';
import { signupType } from '../redux/actions/types';

describe('Initial signup reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ createdUser: '', errors: '' });
  });
});

describe('on failure to signup', () => {
  let newState;
  const initialState = {
    createdUser: '',
    errors: ''
  };
  it('should signup failure', () => {
    const payload = {
        message: "That email is already taken", status: 400
    };
    newState = reducer(undefined,
      {
        type: signupType.SIGNUP_ERROR,
        payload: payload
      });
    expect(newState).toEqual({
        ...initialState,
        errors: "You cannot sign up with provided username, email and password"
    });
  });
});
