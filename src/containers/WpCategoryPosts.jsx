import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Semantic UI
import { Item } from 'semantic-ui-react'

// Component
import WpArchiveItem from '../components/Wp/ArchiveItem'

// Action
import {
  listWpPostByCategory,
  unsetWpSubPosts
} from '../redux/actions/creators/wp/posts'
// conf
import { getDefaultLanguage } from '../settings/lang'

class ContainerListWPCategoryPosts extends Component {
  componentWillMount () {
    const { dispatch, lang, categoryId } = this.props
    dispatch(listWpPostByCategory(lang, categoryId))
  }
  componentWillUnmount () {
    const { dispatch, categoryId } = this.props
    dispatch(unsetWpSubPosts(categoryId))
  }
  render () {
    const { subItems, url, categoryId } = this.props
    if (Object.keys(subItems).length === 0) return <div />
    const items = subItems[categoryId] || []
    if (items.length === 0) return <div />
    return (
      <Item.Group divided relaxed>
        {items.map((item, key) => (
          <WpArchiveItem
            key={key}
            item={item}
            url={url}
            showDescription={false}
          />
        ))}
      </Item.Group>
    )
  }
}
ContainerListWPCategoryPosts.propTypes = {
  lang: PropTypes.string,
  subItems: PropTypes.object.isRequired,
  url: PropTypes.string,
  categoryId: PropTypes.number.isRequired
}
ContainerListWPCategoryPosts.defaultProps = {
  lang: getDefaultLanguage(),
  url: ''
}

function mapStateToProp (state) {
  const { wpPosts } = state
  const { list } = wpPosts
  const { subItems } = list
  return {
    subItems
  }
}

export default connect(mapStateToProp)(ContainerListWPCategoryPosts)
