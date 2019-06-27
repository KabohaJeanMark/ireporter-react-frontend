import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home/Home';

describe('Home Component', () => {
  it('renders without errors', () => {
    const component = shallow(<Home />);
    const wrapper = component.find('.home');
    expect(wrapper.length).toBe(1);
  });
});
