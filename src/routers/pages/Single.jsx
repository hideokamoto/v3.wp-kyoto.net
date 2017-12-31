import React from 'react';
import PropTypes from 'prop-types';
// Semantic UI
import {
  Divider,
} from 'semantic-ui-react';
// Containers
import ContainerSingleWPPost from '../../containers/WpSinglePost';
import ContainerWidgetRelatedPost from '../../containers/Widgets/JetPack/RelatedPost';

// conf
import {
  getDefaultLanguage,
} from '../../settings/lang';

const PageSingle = (props) => (
  <div>
    <ContainerSingleWPPost lang={props.lang} slug={props.slug} />
    <Divider />
    <ContainerWidgetRelatedPost lang={props.lang} />
  </div>
)

PageSingle.propTypes = {
  lang: PropTypes.string,
  slug: PropTypes.string,
}
PageSingle.defaultProps = {
  lang: getDefaultLanguage(),
  slug: '',
}

export default PageSingle;
