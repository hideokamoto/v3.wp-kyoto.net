import React from 'react'
import PropTypes from 'prop-types'

// Containers
import Head from '../../containers/Helmet'
import ContainerListWPPosts from '../../containers/WpListPosts'
// <ContainerSearchWpPosts lang={props.lang} />
// import ContainerSearchWpPosts from '../../containers/WpPostSearch'

// conf
import { getDefaultLanguage } from '../../settings/lang'

const PageArchives = props => {
  return (
    <div>
      <Head />
      <ContainerListWPPosts lang={props.lang} url={props.url} />
    </div>
  )
}

PageArchives.propTypes = {
  lang: PropTypes.string
}
PageArchives.defaultProps = {
  lang: getDefaultLanguage()
}

export default PageArchives
