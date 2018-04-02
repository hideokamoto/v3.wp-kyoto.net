import React from 'react'
import PropTypes from 'prop-types'
import GoogleAds from 'react-google-ads'
import AdAmazonLeaderBoard from '../Ad/Amazon'
// Semantic UI
import { Header } from 'semantic-ui-react'
// Utils
import { formatRenderedMarkup, formatDate } from '../../utils/format'

const WpSinglePost = props => {
  if (Object.keys(props.item).length === 0) return <p>No post</p>
  return (
    <article>
      <Header as="h1">
        <span
          dangerouslySetInnerHTML={formatRenderedMarkup(
            props.item.title.rendered
          )}
        />
        <Header.Subheader>{formatDate(props.item.date)}</Header.Subheader>
        {props.item._embedded.author[0].name ? (
          <Header.Subheader>
            投稿者: {props.item._embedded.author[0].name}
          </Header.Subheader>
        ) : (
          ''
        )}
      </Header>
      <GoogleAds
        client="ca-pub-6091198629319043"
        slot="2845873311"
        className="adsbygoogle"
        format="auto"
        style={{ display: 'block' }}
      />
      <div
        dangerouslySetInnerHTML={formatRenderedMarkup(
          props.item.content.rendered
        )}
      />
      <AdAmazonLeaderBoard />
    </article>
  )
}

WpSinglePost.propTypes = {
  item: PropTypes.shape({
    slug: PropTypes.string
  })
}
WpSinglePost.defaultProps = {
  item: {}
}

export default WpSinglePost
