import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Login } from '../containers/Login';

describe('Login container', () => {
  let wrapper;
  let props;
  let instance;
  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      postLogin: jest.fn(),
      username: "marcus",
      password: "kakashi@1994",
      toast: {
        error: jest.fn()
      }
    };
    wrapper = shallow(<Login {...props} />);
    instance = wrapper.instance();
  });
  it('renders without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('handles form submission', () => {
    const e = {
      preventDefault: jest.fn()
    };
    instance.setState(props);
    instance.handleSubmit(e);
    expect(props.postLogin).toHaveBeenCalledTimes(1);
  });
  it('handles change', () => {
    const e = {
      target: {
        name: "username",
        value: "marcusrashford"
      }
    };
    instance.handleChange(e);
  });
});
