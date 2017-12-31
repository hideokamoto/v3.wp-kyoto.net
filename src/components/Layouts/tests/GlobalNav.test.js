/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import GlobalNav from '../GlobalNav'
configure({ adapter: new Adapter() })

describe('GlobalNav', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<GlobalNav />)
    expect(wrapper).toMatchSnapshot()
  })
})
