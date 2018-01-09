import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

// Component
import WpSinglePost from '../components/Wp/SinglePost'

// Action
import { getPageById, unsetPageById } from '../redux/actions/creators/wp/pages'
// conf
import { getDefaultLanguage } from '../settings/lang'

class ContainerWpPageById extends Component {
  componentWillMount () {
    this.getPageById(this.props)
  }
  componentWillUnmount () {
    this.props.dispatch(unsetPageById())
  }
  getPageById (props) {
    const { dispatch, lang, pageId } = props
    dispatch(getPageById(pageId, lang))
  }
  render () {
    const { isFetching, item } = this.props
    if (isFetching) {
      return (
        <Container>
          <p>loading...</p>
        </Container>
      )
    }
    return (
      <Container>
        <WpSinglePost item={item} />
      </Container>
    )
  }
}
ContainerWpPageById.propTypes = {
  lang: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  url: PropTypes.string,
  pageId: PropTypes.number.isRequired
}
ContainerWpPageById.defaultProps = {
  lang: getDefaultLanguage(),
  url: ''
}

function mapStateToProp (state) {
  const { wpPage } = state
  const { single } = wpPage
  const { isFetching, item } = single
  return {
    isFetching,
    item
  }
}

export default connect(mapStateToProp)(ContainerWpPageById)
