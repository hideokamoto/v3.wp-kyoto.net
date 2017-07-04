import {
  PostListAdditional,
  PostListLimit,
  PostNotFoundNumber,
  getPostList
} from '../../wp'
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import WidgetArchiveContent from './content'

import './archive.css';

class WidgetArchive extends Component {
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
    const {match} = this.props
    let Posts = 'Loading...'
    if (posts.length > PostNotFoundNumber) {
      /* eslint-disable react/jsx-max-props-per-line */
      Posts = posts.map((post) => (
          <WidgetArchiveContent key={post.id} post={post} url={match.url}/>)
      )
      /* eslint-enable react/jsx-max-props-per-line */
    }
    return (
      <div className="WidgetRow">
        <nav className="PostWidget">
          <h2>Another Posts</h2>
          {Posts}
        </nav>
      </div>
    )
  }
}

WidgetArchive.propTypes = {
  'match': PropTypes.shape({
    'url': PropTypes.string
  }),
  'lang': PropTypes.string
}
WidgetArchive.defaultProps = {
  'match': {
    'url': ''
  },
  'lang': 'ja'
}
export default WidgetArchive;
