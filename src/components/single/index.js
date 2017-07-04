import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css';
import WidgetArchive from '../widget/archive'

import {Head} from '../head/index'

class Single extends Component {
  createMarkup(content) {
    return {__html: content};
  }
  render() {
    const {post, lang} = this.props
    if ( post.date !== '') {
      post.date = new Date(post.date).toLocaleString()
    }

    return (
      <div className="Single wrap" id="single">
        <Head subTitle={post.title.rendered} />
        <div className="Post-meta">
          <span>{post.date}</span>
          <span>投稿者:</span>
          <span>{post._embedded.author[0].name}</span>
        </div>
        <h2 dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)} />
        <div dangerouslySetInnerHTML={this.createMarkup(post.content.rendered)} />
        <hr />
        <WidgetArchive lang={lang}/>
        <a href="#single" className="SingleScrollTop">TOPに戻る</a>
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
  }),
  'lang': PropTypes.string
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
  },
  'lang': 'ja'
}

export default Single;
