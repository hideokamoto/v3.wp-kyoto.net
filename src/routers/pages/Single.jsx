import React from 'react';
import PropTypes from 'prop-types';

// conf
import {
  getDefaultLanguage,
} from '../../settings/lang'

const PageSingle = (props) => (
  <div>
    PageTop: {props.lang}
  </div>
)

PageSingle.propTypes = {
  lang: PropTypes.string,
}
PageSingle.defaultProps = {
  lang: getDefaultLanguage()
}

export default PageSingle;
