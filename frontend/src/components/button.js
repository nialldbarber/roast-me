import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text, icon, removeToast }) {
  return (
    <button className="btn" type="submit" handleClick={removeToast}>
      <span>
        <span>{text}</span>
        {icon ? <img className="close-btn" src={icon} alt="close" /> : ''}
      </span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  removeToast: PropTypes.func,
};
