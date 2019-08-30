import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Header from './index'
import React from 'react';

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
})

describe('Header Component', () => {

  const component = shallow(<Header />) 

  it('It should render without error', () => {
    const wrapper = component.find('.headerComponent')
    expect(wrapper.length).toBe(1)
  })

  it('It should logo', () => {
    const logo = component.find('.logo')
    expect(logo.length).toBe(1)
  })
})
