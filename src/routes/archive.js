import {
  PostListAdditional,
  PostListLimit,
  PostNotFoundNumber,
  getPostList
} from '../wp'
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import Archive from '../components/archives/index'

class RouteArchive extends Component {
  constructor (props) {
    super(props)
    // Debugconsole.log(props.location.search)
    this.state = {
      'page': 1,
      'posts': []
    }
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
    console.log(posts)
    return (
      <div>
        <h3>Archive</h3>
        <p>{match.params.topicId}</p>
        <Archive />
      </div>
    )
  }
}

RouteArchive.propTypes = {'lang': PropTypes.string}
RouteArchive.defaultProps = {'lang': 'ja'}
export default RouteArchive;
