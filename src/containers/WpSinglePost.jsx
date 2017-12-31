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
  constructor(props) {
    super(props);
    this.state = {
      currentSlug: ''
    }
  }
  componentWillMount() {
    this.getPosts(this.props);
  }
  componentWillUnmount() {
    this.props.dispatch(unsetWpPost());
  }
  componentWillReceiveProps(props) {
    if (this.state.currentSlug !== props.slug) {
      this.getPosts(props);
    }
  }
  getPosts(props) {
    const {
      dispatch,
      lang,
      slug,
    } = props;
    this.setState({
      currentSlug: slug,
    });
    dispatch(getWpPost(slug, lang));
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