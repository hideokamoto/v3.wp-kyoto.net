import React from 'react';
import PropTypes from 'prop-types';

// Containers
import ContainerSingleWPPost from '../../containers/WpSinglePost';

// conf
import {
  getDefaultLanguage,
} from '../../settings/lang';

const PageSingle = (props) => (
  <div>
    <ContainerSingleWPPost lang={props.lang} slug={props.slug} />
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
