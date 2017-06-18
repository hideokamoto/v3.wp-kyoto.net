import React, { Component } from 'react';
import {PostNotFoundNumber, getPostBySlug} from '../wp'
import PropTypes from 'prop-types'
import Single from '../components/single/index';

class RouteEnSingle extends Component {
  constructor (props) {
    super(props)
    this.state = {'posts': []}
  }
  componentWillMount () {
    const {match} = this.props
    /* eslint-disable react/no-set-state */
    getPostBySlug(match.params.slug, 'en').then((data) => {
      this.setState({'posts': data})
    })
    .catch((err) => {
      this.setState({'posts': err})
    })
    /* eslint-enable react/no-set-state */
  }
  render() {
    const {posts} = this.state
    return (
      <Single post={posts[PostNotFoundNumber]} />
    )
  }
}

/* eslint-disable object-curly-newline */
RouteEnSingle.propTypes = {
  'match': PropTypes.shape({
    'params': PropTypes.shape({
      'slug': PropTypes.string
    })
  })
}
/* eslint-enable object-curly-newline */
RouteEnSingle.defaultProps = {'match': {'params': {'slug': false}}}

export default RouteEnSingle;
