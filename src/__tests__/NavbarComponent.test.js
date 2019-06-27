import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar/';

describe('Navbar Component', () => {
  it('renders without errors', () => {
    const component = shallow(<Navbar />);
    const wrapper = component.find('.Navbar');
    expect(wrapper.length).toBe(1);
  });
});
