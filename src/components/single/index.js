import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css';

class Single extends Component {
  createMarkup(content) {
    return {__html: content};
  }
  render() {
    const {post} = this.props

    return (
      <div className="wrap">
        <div className="Post-meta">
          <span>{new Date(post.date).toLocaleString()}</span>
          <span>投稿者:</span>
          <span>{post._embedded.author[0].name}</span>
        </div>
        <h2 dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)} />
        <div dangerouslySetInnerHTML={this.createMarkup(post.content.rendered)} />
      </div>
    );
  }
}

Single.propTypes = {
  'post': PropTypes.shape({
    'title': PropTypes.shape({
      'rendered': PropTypes.string
    }),
    'content': PropTypes.shape({
      'rendered': PropTypes.string
    }),
    'date': PropTypes.string,
    '_embedded': PropTypes.shape({
      'author': PropTypes.arrayOf(
        PropTypes.shape({
          'name': PropTypes.string
        })
      )
    })
  })
}
Single.defaultProps = {
  'post': {
    'title': {
      'rendered': ''
    },
    'content': {
      'rendered': ''
    },
    'date': '',
    '_embedded': {
      'author': [
        {'name': ''}
      ]
    }
  }
}

export default Single;
