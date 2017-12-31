import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Semantic UI
import {
  Item,
  Header,
} from 'semantic-ui-react';

// Component
import WidgetJetPackRelatedPost from '../../../components/Widgets/JetPack/RelatedPost';

// conf
import {
  getDefaultLanguage,
} from '../../../settings/lang'

const ContainerWidgetRelatedPost = (props) => {
  const {
    isFetching,
    item,
    lang,
  } = props;
  if (lang !== getDefaultLanguage()) return <div />;
  if (isFetching) return <p>loading...</p>;
  const related = item['jetpack-related-posts'] || [];
  if (related.length === 0) return <div />;
  return (
    <div>
      <Header as="h2" content="Related posts" />
      <Item.Group divided relaxed>
        {related.map((item, key) => <WidgetJetPackRelatedPost key={key} item={item} />)}
      </Item.Group>
    </div>
  )
}
ContainerWidgetRelatedPost.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  url: PropTypes.string,
  slug: PropTypes.string,
  lang: PropTypes.string,
}
ContainerWidgetRelatedPost.defaultProps = {
  lang: '',
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

export default connect(mapStateToProp)(ContainerWidgetRelatedPost);