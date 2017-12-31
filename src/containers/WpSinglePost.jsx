import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Component
import WpSinglePost from '../components/Wp/SinglePost';

// Action
import {
  getWpPost,
  unsetWpPost,
} from '../redux/actions/creators/wp/posts';
// conf
import {
  getDefaultLanguage,
} from '../settings/lang'

class ContainerSingleWPPost extends Component {
  componentWillMount() {
    const {
      dispatch,
      lang,
      slug,
    } = this.props;
    dispatch(getWpPost(slug, lang));
  }
  componentWillUnmount() {
    this.props.dispatch(unsetWpPost());
  }
  render() {
    const {
      isFetching,
      item,
    } = this.props;
    if (isFetching) return <p>loading...</p>;
    return <WpSinglePost item={item} />
  }
}
ContainerSingleWPPost.propTypes = {
  lang: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  url: PropTypes.string,
  slug: PropTypes.string,
}
ContainerSingleWPPost.defaultProps = {
  lang: getDefaultLanguage(),
  url: '',
  slug: '',
}

function mapStateToProp(state) {
  const { wpPosts } = state;
  const { single } = wpPosts;
  const {
    isFetching,
    item,
  } = single;
  return {
    isFetching,
    item,
  };
}

export default connect(mapStateToProp)(ContainerSingleWPPost);