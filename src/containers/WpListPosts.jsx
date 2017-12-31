import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Semantic UI
import { Item } from 'semantic-ui-react'

// Component
import WpArchiveItem from '../components/Wp/ArchiveItem'

// Action
import { listWpPosts, unsetWpPosts } from '../redux/actions/creators/wp/posts'
// conf
import { getDefaultLanguage } from '../settings/lang'

class ContainerListWPPosts extends Component {
  componentWillMount () {
    const { dispatch, lang } = this.props
    dispatch(listWpPosts(lang))
  }
  componentWillUnmount () {
    this.props.dispatch(unsetWpPosts())
  }
  render () {
    const { isFetching, items, url } = this.props
    if (isFetching) return <p>loading...</p>
    if (items.length === 0) return <p>no posts</p>
    return (
      <Item.Group divided relaxed>
        {items.map((item, key) => (
          <WpArchiveItem key={key} item={item} url={url} />
        ))}
      </Item.Group>
    )
  }
}
ContainerListWPPosts.propTypes = {
  lang: PropTypes.string,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  url: PropTypes.string
}
ContainerListWPPosts.defaultProps = {
  lang: getDefaultLanguage(),
  url: ''
}

function mapStateToProp (state) {
  const { wpPosts } = state
  const { list } = wpPosts
  const { isFetching, items } = list
  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProp)(ContainerListWPPosts)
