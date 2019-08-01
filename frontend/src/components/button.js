import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text }) {
  return (
    <button type="submit">
      <span>{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};
