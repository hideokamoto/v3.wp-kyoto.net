import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

class ArchiveItem extends Component {
  createMarkup(content) {
    return {__html: content};
  }
  render() {
    const {url, post} = this.props
    return (
      <div className="ArchiveItem">
        <Link
          to={`${url}/${post.slug}`}
          dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)}
        />
      </div>
    );
  }
}

export default ArchiveItem;
