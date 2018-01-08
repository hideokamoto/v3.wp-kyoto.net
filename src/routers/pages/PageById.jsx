import React from 'react'
import PropTypes from 'prop-types'
// Semantic UI
// import { Divider } from 'semantic-ui-react'
// Containers
import Head from '../../containers/Helmet'
import ContainerWpPageBySlug from '../../containers/WpPageById'

// conf
import { getDefaultLanguage } from '../../settings/lang'

const PageById = props => (
  <div>
    <Head />
    <ContainerWpPageBySlug lang={props.lang} pageId={props.pageId} />
  </div>
)

PageById.propTypes = {
  lang: PropTypes.string,
  pageId: PropTypes.number
}
PageById.defaultProps = {
  lang: getDefaultLanguage(),
  pageId: 0
}

export default PageById
