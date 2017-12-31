/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AppHeader from '../Header'
configure({ adapter: new Adapter() })

describe('AppHeader', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AppHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
