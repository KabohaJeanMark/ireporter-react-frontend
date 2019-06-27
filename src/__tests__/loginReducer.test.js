import reducer from '../redux/reducers/LoginReducer';
import { loginType } from '../redux/actions/types';

describe('Initial login reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ loggedInUser: '', errors: '' });
  });
});

describe('on failure login', () => {
  let newState;
  const initialState = {
    loggedInUser: '',
    errors: ''
  };
  it('should login failure', () => {
    const payload = {
        "message":"Please enter valid username and password","status":400
    };
    newState = reducer(undefined,
      {
        type: loginType.LOGIN_ERROR,
        payload: payload
      });
    expect(newState).toEqual({
        ...initialState,
        errors: "Your username or password is incorrect"
    });
  });
});
