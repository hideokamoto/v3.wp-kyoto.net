import React from 'react'

// Semantic UI
import { Responsive } from 'semantic-ui-react'

// component
import PcGlobalNav from '../Navigations/PC/GlobalNav'
import MobileGlobalNav from '../Navigations/Mobile/GlobalNav'

const GlobalNav = () => {
  return [
    <Responsive as={PcGlobalNav} {...Responsive.onlyComputer} key={0} />,
    <Responsive as={MobileGlobalNav} {...Responsive.onlyTablet} key={1} />,
    <Responsive as={MobileGlobalNav} {...Responsive.onlyMobile} key={2} />
  ]
}

export default GlobalNav
