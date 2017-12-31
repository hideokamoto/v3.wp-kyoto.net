import React from 'react';
import PropTypes from 'prop-types';

// Containers
import ContainerListWPPosts from '../../containers/WpListPosts';

const PageArchives = (props) => (
  <div>
    <ContainerListWPPosts lang={props.lang} />
  </div>
)

PageArchives.propTypes = {
  lang: PropTypes.string,
}
PageArchives.defaultProps = {
  lang: 'ja'
}

export default PageArchives;
