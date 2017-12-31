import React from 'react';
import PropTypes from 'prop-types';

// Containers
import ContainerListWPPosts from '../../containers/WpListPosts';
// conf
import {
  getDefaultLanguage,
} from '../../settings/lang'

const PageTop = (props) => (
  <div>
    <ContainerListWPPosts lang={props.lang} />
  </div>
);
PageTop.propTypes = {
  lang: PropTypes.string,
}
PageTop.defaultProps = {
  lang: getDefaultLanguage()
}

export default PageTop;
