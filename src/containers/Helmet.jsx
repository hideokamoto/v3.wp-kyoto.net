import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

const Head = props => {
  const baseTitle = 'WP-Kyoto'
  const title = (() => {
    if (props.postTitle) return props.postTitle
    return props.subTitle ? `${props.subTitle} - ${baseTitle}` : baseTitle
  })()
  const description = 'WordPress / AWSなど'
  const url = window.location.toString()
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@motchi0214' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'blog' },
        { property: 'og:url', content: url },
        { property: 'og:site_name', content: baseTitle },
        { property: 'og:description', content: description }
      ]}
    />
  )
}

function mapStateToProp (state) {
  const { wpPosts } = state
  const { single } = wpPosts
  const { item } = single
  if (item.title && item.title.rendered) {
    return {
      postTitle: item.title.rendered
    }
  }
  return {
    postTitle: ''
  }
}

export default connect(mapStateToProp)(Head)
