import React from 'react';
import PropTypes from 'prop-types';

// Containers

const PageTop = (props) => (
  <div>
    PageTop: {props.lang}
  </div>
);
PageTop.propTypes = {
  lang: PropTypes.string,
}
PageTop.defaultProps = {
  lang: 'ja'
}

export default PageTop;
