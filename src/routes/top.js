import {getPostList} from '../wp'
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import Archive from '../components/archives/index'

class RouteTop extends Component {
  constructor (props) {
    super(props)
    this.state = {'posts': []}
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

    return (
      <div>
        <h3>Archive</h3>
        <Archive posts={posts}/>
      </div>
    )
  }
}

RouteTop.propTypes = {'lang': PropTypes.string}
RouteTop.defaultProps = {'lang': 'ja'}
export default RouteTop;
