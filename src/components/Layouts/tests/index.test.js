/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AppLayouts from '../index'
configure({ adapter: new Adapter() })

describe('AppLayouts', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <AppLayouts>
        <p>components</p>
      </AppLayouts>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
