import React, { Component } from 'react';
import { PostNotFoundNumber } from '../../wp'
import PropTypes from 'prop-types'
import './index.css';
import ArchiveItem from './item'
import {Head} from '../head/index'
import {renderered} from '../../prerender'

class Archives extends Component {
  render() {
    const {match, posts} = this.props
    let Posts = 'Loading...'
    if (posts.length > PostNotFoundNumber) {
      /* eslint-disable react/jsx-max-props-per-line */
      Posts = posts.map((post) => (
          <ArchiveItem key={post.id} post={post} url={match.url}/>)
      )
      /* eslint-enable react/jsx-max-props-per-line */
    }
    return (
      <div className="Archives">
        <Head subTitle="" />
        {Posts}
      </div>
    );
  }
}

Archives.propTypes = {
  'match': PropTypes.shape({
    'url': PropTypes.string
  })
}
Archives.defaultProps = {
  'match': {
    'url': ''
  },
  'posts': []
}

export default Archives;
