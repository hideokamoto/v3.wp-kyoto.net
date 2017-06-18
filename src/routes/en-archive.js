import React, { Component } from 'react';
import { getPostList } from '../wp'
import PropTypes from 'prop-types'
import Archive from '../components/archives/index'

class RouteEnArchive extends Component {
  constructor (props) {
    super(props)
    this.state = {'posts': []}
  }
  componentWillMount () {
    /* eslint-disable react/no-set-state */
    getPostList(this.state.page, this.props.lang).then((data) => {
      this.setState({'posts': data})
    })
    .catch((err) => {
      this.setState({'posts': err})
    })
    /* eslint-enable react/no-set-state */
  }
  render() {
    const {posts} = this.state
    const {match} = this.props

    return (
      <Archive posts={posts} match={match}/>
    )
  }
}

RouteEnArchive.propTypes = {'lang': PropTypes.string}
RouteEnArchive.defaultProps = {'lang': 'en'}
export default RouteEnArchive;
