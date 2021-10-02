import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies

const Display = ({ title, author }) => (
  <div>
    <p>{title}</p>
    <p>{author}</p>
    <button type="submit" aria-label="Decrement value">
      remove
    </button>
  </div>
);

Display.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
};

Display.defaultProps = {
  title: '1',
  author: 'white',
};
export default Display;
