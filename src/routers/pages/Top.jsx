import React from 'react'
import PropTypes from 'prop-types'

// Containers
import Head from '../../containers/Helmet'
import ContainerListWPPosts from '../../containers/WpListPosts'
import ContainerSearchWpPosts from '../../containers/WpPostSearch'
// conf
import { getDefaultLanguage } from '../../settings/lang'

const PageTop = props => (
  <div>
    <Head />
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
