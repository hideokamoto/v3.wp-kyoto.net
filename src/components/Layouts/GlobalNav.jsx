import React from 'react'

// Semantic UI
import {
  Responsive,
} from 'semantic-ui-react'

// component
import PcGlobalNav from '../Navigations/PC/GlobalNav';
import MobileGlobalNav from '../Navigations/Mobile/GlobalNav';

const GlobalNav = () => {
  return [
    <Responsive as={PcGlobalNav} minWidth={992} key={0} />,
    <Responsive as={MobileGlobalNav} maxWidth={991} key={1} />
  ]
}

export default GlobalNav
