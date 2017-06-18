import React from 'react'
import App from '../../src/App'
import renderer from 'react-test-renderer'

test('App rendering test', () => {
  const component = renderer.create(
    <App />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
