import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './content.css';

class WidgetArchiveContent extends Component {
  createMarkup(content) {
    return {__html: content};
  }
  render() {
    const {url, post} = this.props
    return (
      <Link
        to={`${url}/${post.slug}`}
        className="ArchiveItem"
      >
        <h2 dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)} />
        <p>{new Date(post.date).toLocaleString()}</p>
      </Link>
    )
  }
}

WidgetArchiveContent.propTypes = {
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
WidgetArchiveContent.defaultProps = {
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

export default WidgetArchiveContent;
