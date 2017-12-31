import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Semantic UI
import { Item, Button } from 'semantic-ui-react'

import { getMainApiUrl } from '../../../settings/api'

const WidgetJetPackRelatedPost = props => {
  const { item } = props
  if (Object.keys(item).length === 0) return <div />
  const base = getMainApiUrl()
  const splits = item.url.split(base)
  if (splits.length < 1) return <div />
  const slugs = splits[1].split('/')
  const slug = slugs[0]
  return (
    <Item>
      <Item.Content>
        <Item.Header as={Link} to={`/${slug}`}>
          {item.title}
        </Item.Header>
        <Item.Meta>
          <span>{item.date}</span>
        </Item.Meta>
        <Item.Description>{item.excerpt}</Item.Description>
        <Item.Extra>
          <Button floated="right" as={Link} to={`/${slug}`}>
            Read more
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

WidgetJetPackRelatedPost.propTypes = {
  item: PropTypes.shape({
    slug: PropTypes.string
  })
}
WidgetJetPackRelatedPost.defaultProps = {
  item: {}
}

export default WidgetJetPackRelatedPost
