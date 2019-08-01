import React from 'react';
import PropTypes from 'prop-types';

export default function Toast({ error, message, link }) {
  return (
    <div className={`toast ${error ? 'active' : ''} toast-${error}`}>
      <p>
        <span>{message}</span>
      </p>
    </div>
  );
}

Toast.propTypes = {
  error: PropTypes.bool.isRequired,
  message: PropTypes.string,
  link: PropTypes.string,
};
