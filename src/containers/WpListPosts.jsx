import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Semantic UI
import {
  Item,
  Button,
} from 'semantic-ui-react';

// Component

// Action
import {
  listWpPosts,
  unsetWpPosts,
} from '../redux/actions/creators/wp/posts';

// Utils
import {
  formatRenderedMarkup,
  formatDate,
} from '../utils/format';

class ContainerListWPPosts extends Component {
  componentWillMount() {
    const {
      dispatch,
      lang
    } = this.props;
    dispatch(listWpPosts(lang));
  }
  componentWillUnmount() {
    this.props.dispatch(unsetWpPosts());
  }
  render() {
    const {
      isFetching,
      items,
    } = this.props;
    if (isFetching) return <p>loading...</p>;
    if (items.length === 0) return <p>no posts</p>;
    const lists = items.map((item, key) => {
      return (
        <Item key={key}>
          <Item.Content>
            <Item.Header as={Link} to={`/${item.slug}`}>{item.title.rendered}</Item.Header>
            <Item.Meta>
              <span>{formatDate(item.date)}</span>
            </Item.Meta>
            <Item.Description>
              <div dangerouslySetInnerHTML={formatRenderedMarkup(item.excerpt.rendered)} />
            </Item.Description>
            <Item.Extra>
              <Button floated='right' as={Link} to={`/${item.slug}`}>
                Read more
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    })
    return (
      <Item.Group divided relaxed>
        {lists}
      </Item.Group>
    );
  }
}
ContainerListWPPosts.propTypes = {
  lang: PropTypes.string,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
ContainerListWPPosts.defaultProps = {
  lang: 'ja'
}

function mapStateToProp(state) {
  const { wpPosts } = state;
  const { list } = wpPosts;
  const {
    isFetching,
    items,
  } = list;
  return {
    isFetching,
    items,
  };
}

export default connect(mapStateToProp)(ContainerListWPPosts);