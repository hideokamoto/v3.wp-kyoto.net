import React from 'react'
import PropTypes from 'prop-types'

// Containers
import Head from '../../containers/Helmet'
import ContainerListWPPosts from '../../containers/WpListPosts'
// conf
import { getDefaultLanguage } from '../../settings/lang'

const PageTop = props => (
  <div>
    <Head />
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
