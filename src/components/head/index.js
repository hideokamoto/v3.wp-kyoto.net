import React from 'react'
import Helmet from 'react-helmet'

export const Head = ({subTitle}) => {
  const baseTitle = 'WP-Kyoto'
  const title = subTitle ? `${subTitle} - ${baseTitle}` : baseTitle
  const description = 'WordPress / AWSなど'
  const url = window.location.toString()
  return <Helmet
    title={title}
    meta={[
      {'name': 'twitter:card', 'content': 'summary'},
      {'name': 'twitter:site', 'content': '@motchi0214'},
      {'name': 'twitter:title', 'content': title},
      {'name': 'twitter:description', 'content': description},
      {'property': 'og:title', 'content': title},
      {'property': 'og:type', 'content': 'blog'},
      {'property': 'og:url', 'content': url},
      {'property': 'og:site_name', 'content': baseTitle},
      {'property': 'og:description', 'content': description}
    ]}
  />
}
