import React from 'react';
import PropTypes from 'prop-types';

// Containers

const PageSingle = (props) => (
  <div>
    PageTop: {props.lang}
  </div>
)

PageSingle.propTypes = {
  lang: PropTypes.string,
}
PageSingle.defaultProps = {
  lang: 'ja'
}

export default PageSingle;
