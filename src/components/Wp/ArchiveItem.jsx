import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Semantic UI
import { Item, Button } from 'semantic-ui-react'
// Utils
import { formatRenderedMarkup, formatDate } from '../../utils/format'

const WpArchiveItem = props => {
  if (Object.keys(props.item).length === 0) return <Item>No post</Item>
  const url = props.url
    ? `${props.url}/${props.item.slug}`
    : `/${props.item.slug}`
  return (
    <Item>
      <Item.Content>
        <Item.Header as={Link} to={url}>
          {props.item.title.rendered}
        </Item.Header>
        <Item.Meta>
          <span>{formatDate(props.item.date)}</span>
        </Item.Meta>
        <Item.Description>
          <div
            dangerouslySetInnerHTML={formatRenderedMarkup(
              props.item.excerpt.rendered
            )}
          />
        </Item.Description>
        <Item.Extra>
          <Button floated="right" as={Link} to={url}>
            Read more
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

WpArchiveItem.propTypes = {
  item: PropTypes.shape({
    slug: PropTypes.string
  })
}
WpArchiveItem.defaultProps = {
  item: {}
}

export default WpArchiveItem
