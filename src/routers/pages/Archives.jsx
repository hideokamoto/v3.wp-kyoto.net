import React from 'react';
import PropTypes from 'prop-types';

// Containers

const PageArchives = (props) => (
  <div>
    PageTop: {props.lang}
  </div>
)

PageArchives.propTypes = {
  lang: PropTypes.string,
}
PageArchives.defaultProps = {
  lang: 'ja'
}

export default PageArchives;
