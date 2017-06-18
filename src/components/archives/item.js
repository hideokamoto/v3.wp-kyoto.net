import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './item.css';

class ArchiveItem extends Component {
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
        <div dangerouslySetInnerHTML={this.createMarkup(post.excerpt.rendered)} />
        <p>{new Date(post.date).toLocaleString()}</p>
      </Link>
    );
  }
}

export default ArchiveItem;
