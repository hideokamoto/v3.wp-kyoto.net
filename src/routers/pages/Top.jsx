import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'semantic-ui-react'

// Containers
import Head from '../../containers/Helmet'
import ContainerListWPPosts from '../../containers/WpListPosts'
import ContainerSearchWpPosts from '../../containers/WpPostSearch'

// Static Component
import About from '../../components/Static/About'
// conf
import { getDefaultLanguage } from '../../settings/lang'

const PageTop = props => (
  <div>
    <Head />
    <About />
    <Divider />
    <ContainerSearchWpPosts lang={props.lang} />
    <ContainerListWPPosts lang={props.lang} />
  </div>
)
PageTop.propTypes = {
  lang: PropTypes.string
}
PageTop.defaultProps = {
  lang: getDefaultLanguage()
}

export default PageTop
