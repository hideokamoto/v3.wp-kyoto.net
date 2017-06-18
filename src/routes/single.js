import React, { Component } from 'react';
import {PostNotFoundNumber, getPostBySlug} from '../wp'
import PropTypes from 'prop-types'
import Single from '../components/single/index';

class RouteSingle extends Component {
  constructor (props) {
    super(props)
    this.state = {'posts': {}}
  }
  componentWillMount () {
    const {match} = this.props
    /* eslint-disable react/no-set-state */
    getPostBySlug(match.params.slug, 'ja').then((data) => {
      this.setState({'posts': data})
    })
    .catch((err) => {
      this.setState({'posts': err})
    })
    /* eslint-enable react/no-set-state */
  }
  render() {
    const {posts} = this.state
    let post = ['Loading...']
    post = posts[PostNotFoundNumber]

    return (
      <Single post={post} />
    )
  }
}

/* eslint-disable object-curly-newline */
RouteSingle.propTypes = {
  'match': PropTypes.shape({
    'params': PropTypes.shape({
      'slug': PropTypes.string
    })
  })
}
/* eslint-enable object-curly-newline */
RouteSingle.defaultProps = {'match': {'params': {'slug': false}}}

export default RouteSingle;
