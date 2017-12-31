import React from 'react';
import PropTypes from 'prop-types';

// Containers
import ContainerListWPPosts from '../../containers/WpListPosts';

const PageTop = (props) => (
  <div>
    <ContainerListWPPosts lang={props.lang} />
  </div>
);
PageTop.propTypes = {
  lang: PropTypes.string,
}
PageTop.defaultProps = {
  lang: 'ja'
}

export default PageTop;
