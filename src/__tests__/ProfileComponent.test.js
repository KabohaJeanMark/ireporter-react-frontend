import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../components/Profile/ProfileComponent';

describe('Home Component', () => {
  it('renders without errors', () => {
    const component = shallow(<Profile />);
    const wrapper = component.find('.profile');
    expect(wrapper.length).toBe(1);
  });
});
